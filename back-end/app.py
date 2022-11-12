from operator import and_
from flask import jsonify, request, Response
from models import app, db, Job, Apartment, City, city_tag_link
from schema import job_schema, city_schema, apartment_schema, tag_schema, apt_img_schema
from sqlalchemy.sql import text, column, desc
import json

DEFAULT_PAGE_SIZE = 20
TAGNAME_TO_ID = {
    "Beach Town": 1,
    "History": 2,
    "Nightlife": 3,
    "Foodie": 4,
    "Outdoorsy": 5,
    "Shopping": 6,
    "Performing Arts": 7,
    "Museums": 8,
    "Posh": 9,
    "Hipster": 10,
    "Hippie": 11,
    "Charming": 12,
    "College Town": 13,
    "Family Friendly": 14,
    "Ski Town": 15,
    "Architecture": 17,
    "LGBT Scene": 18,
    "Wineries": 19,
    "Diversity": 20,
    "Music": 21
}

@app.route("/")
def home():
    try:
        db.session.query(column('1')).from_statement(text('SELECT 1')).all()
        return '<h1>GeoJobs API</h1>'
    except Exception as e:
        error_text = "<p>The error:<br>" + str(e) + "</p>"
        hed = '<h1>Something is broken.</h1>'
        return hed + error_text

@app.route("/cities")
def get_cities():
    # get args
    page = request.args.get("page", type=int)
    perPage = request.args.get("perPage", type=int)
    tags = request.args.get("tags")
    state = request.args.get("state")
    population = request.args.get("population")
    rating = request.args.get("rating")
    budget = request.args.get("budget")
    safety = request.args.get("safety")
    sort = request.args.get("sort")

    # Query
    query = db.session.query(City)

    # Filter
    if tags is not None:
        test = db.session.query(city_tag_link.c.city_id).filter(city_tag_link.c.tag_id == TAGNAME_TO_ID[tags])
        query = query.filter(City.id.in_(test))

    if state is not None:
        query = query.filter(City.state == state)

    if population is not None:
        pop_range = population.split("-")
        try:
            query = query.filter(City.population >= pop_range[0], City.population <= pop_range[1])
        except Exception:
            pass
    
    if rating is not None:
        rating_range = rating.split("-")
        try:
            query = query.filter(City.avg_rating >= rating_range[0], City.avg_rating <= rating_range[1])
        except Exception:
            pass
    
    if budget is not None:
        budget_range = budget.split("-")
        try:
            query = query.filter(City.budget >= budget_range[0], City.budget <= budget_range[1])
        except Exception:
            pass
    
    if safety is not None:
        safety_range = safety.split("-")
        try:
            query = query.filter(City.safety >= safety_range[0], City.safety <= safety_range[1])
        except Exception:
            pass
    
    # Sort
    if sort is not None and getattr(City, sort) is not None:
        query = query.order_by(desc(getattr(City, sort)))

    count = query.count()
    if (page is not None):
        query = paginate(query, page, perPage)
    result = city_schema.dump(query, many=True)
    return jsonify(
        {
            "data": result,
            "meta": {
                "count": count
            }
        }
    )
# filter by City Company Job Category Minimum Salary Maximum Salary
@app.route("/jobs")
def get_jobs():
    # get args
    page = request.args.get("page", type=int)
    perPage = request.args.get("perPage", type=int)
    query = db.session.query(Job)
    count = query.count()
    City = request.args.get("city_id") 
    Company = request.args.get("company") 
    Category = request.args.get("category") 
    Minimum_Salary = request.args.get("salary_min") 
    Maximum_Salary = request.args.get("salary_max") 
    sort = request.args.get("sort")

    # FILTERING
    if City is not None:
        query = query.filter(Job.city_id == (City))
    if Company is not None:
        query = query.filter(Job.company == (Company))
    if Category is not None:
        query = query.filter(Job.category == (Category))
    if Maximum_Salary is not None and Minimum_Salary is not None:
        range = (Minimum_Salary, Maximum_Salary)
        query = query.filter(Job.salary_max <= (Maximum_Salary), Job.salary_min >= (Minimum_Salary))

    # Sort
    if sort is not None and getattr(Job, sort) is not None:
        query = query.order_by(desc(getattr(Job, sort)))

    if (page is not None):
        query = paginate(query, page, perPage)
    result = job_schema.dump(query, many=True)
    return jsonify(
        {
            "data": result,
            "meta": {
                "count": count
            }
        }
    )

@app.route("/apartments")
def get_apartments():
    # get args
    page = request.args.get("page", type=int)
    perPage = request.args.get("perPage", type=int)
    city = request.args.get("city")
    propertyType = request.args.get("proptype")
    bedrooms = request.args.get("bedrooms")
    bathrooms = request.args.get("bathrooms")
    price = request.args.get("price")
    sqft = request.args.get("sqft")
    sort = request.args.get("sort")

    # query
    query = db.session.query(Apartment)

    # filter
    if city is not None:
        test = db.session.query(City.id).filter(City.name == city)
        query = query.filter(Apartment.city_id.in_(test))
    
    if propertyType is not None:
        query.filter(Apartment.property_type == propertyType)

    if bedrooms is not None:
        bed_range = bedrooms.split("-")
        try:
            query = query.filter(Apartment.bedrooms >= bed_range[0], Apartment.bedrooms <= bed_range[1])
        except Exception:
            pass
    
    if bathrooms is not None:
        bath_range = bathrooms.split("-")
        try:
            query = query.filter(Apartment.bathrooms >= bath_range[0], Apartment.bathrooms <= bath_range[1])
        except Exception:
            pass
    
    if sqft is not None:
        sqft_range = sqft.split("-")
        try:
            query = query.filter(Apartment.sqft >= sqft_range[0], Apartment.sqft <= sqft_range[1])
        except Exception:
            pass
    
    if price is not None:
        price_range = price.split("-")
        try:
            query = query.filter(Apartment.price >= price_range[0], Apartment.price <= price_range[1])
        except Exception:
            pass

    # Sort
    if sort is not None and getattr(Apartment, sort) is not None:
        query = query.order_by(desc(getattr(Apartment, sort)))

    count = query.count()
    # paginate query if it's specified
    if (page is not None):
        query = paginate(query, page, perPage)
    else :
        query = query.all()
    result = apartment_schema.dump(query, many=True)
    # fetch the first image from images and at it to return
    index = 0
    for i in result:
        try:
            image = apt_img_schema.dump(query[index].images, many=True)[0]
            i.update({"image": image["img_url"]})
        except IndexError:
            i.update({"image": None})
        city = get_city_from_address(i["address"])
        i.update({"city": city})
        index += 1
        
    return jsonify(
        {
            "data": result,
            "meta": {
                "count": count
            }
        }
    )

@app.route("/cities/<int:r_id>")
def get_city(r_id):
    query = db.session.query(City).filter_by(id=r_id)
    try:
        result = city_schema.dump(query, many=True)[0]
    except IndexError:
        return return_error(f"Invalid city ID: {r_id}")
    city = query.first()
    city_tags = tag_schema.dump(city.tags, many=True)
    result.update({"tags": city_tags})
    apts = apartment_schema.dump(city.apartments, many=True)[0]["id"]
    jb = job_schema.dump(city.jobs, many=True)[0]["id"]
    result.update({"apartment": apts})
    result.update({"job": jb})
    return jsonify({
        "data": result
    })

@app.route("/jobs/<int:r_id>")
def get_job(r_id):
    query = db.session.query(Job).filter_by(id=r_id)
    try:
        result = job_schema.dump(query, many=True)[0]
    except IndexError:
        return return_error(f"Invalid job ID: {r_id}")
    job = query.first()
    city = job.city_id
    apartment = apartment_schema.dump(db.session.query(City).filter_by(id=city).first().apartments, many=True)[0]["id"]
    result.update({"city": city})
    result.update({"apartment": apartment})
    return jsonify({
        "data": result
    })

@app.route("/apartments/<string:r_id>")
def get_apartment(r_id):
    query = db.session.query(Apartment).filter_by(id=r_id)
    try:
        result = apartment_schema.dump(query, many=True)[0]
    except IndexError:
        return return_error(f"Invalid apartment ID: {r_id}")
    apartment = query.first()
    apartment_images = apt_img_schema.dump(apartment.images, many=True)
    result.update({"images": apartment_images})
    result.update({"city": get_city_from_address(result["address"])})

    apt = query.first()
    city = apt.city_id
    job = job_schema.dump(db.session.query(City).filter_by(id=city).first().jobs, many=True)[0]["id"]
    result.update({"city": city})
    result.update({"job": job})
    return jsonify({
        "data": result
    })

"""
Returns a 404 error with the given msg
"""
def return_error(msg):
    resp = Response(json.dumps({"error": msg}), mimetype="application/json")
    resp.error_code = 404
    return resp

"""
Returns a paginated query according the page number and number per page
"""
def paginate(query, page_num, num_per_page):
    if num_per_page is None:
        num_per_page = DEFAULT_PAGE_SIZE
    return query.paginate(page=page_num, per_page=num_per_page, error_out=False).items

"""
Returns the city associated with the given address
Note: this assumes that the address is formatted like an apartment address 
      returned from the apartments call
"""
def get_city_from_address(address):
    split_addr = address.split(", ")
    city = split_addr[-2]
    state = split_addr[-1].split(" ")[0]
    if city == "Washington" and state == "DC":
        return "Washington, DC"
    return city
    

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
