from flask import jsonify, request, Response
from models import app, db, Job, Apartment, City
from schema import job_schema, city_schema, apartment_schema, tag_schema, apt_img_schema
from sqlalchemy.sql import text, column
import json

"""
What still needs to be done:
When apartment images are added to database:
    Adjust apartment requests in this file to return images
    Add a test to ensure images are correctly being returned in unit tests
    Adjust postman docs, replace example requests with correct return values

When jobs are added to the database:
    Adjust jobs requests in this file if needed
    Adjust unittests to be functionally correct when jobs are added
    Fill out request description in postman docs
    Add example returns in example requests in postman

When backend is hosted:
    Write postman unittests and make them run as a part of the CI/CD pipeline

"""

DEFAULT_PAGE_SIZE = 20

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
    query = db.session.query(City)
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

@app.route("/jobs")
def get_jobs():
    # get args
    page = request.args.get("page", type=int)
    perPage = request.args.get("perPage", type=int)
    query = db.session.query(Job)
    count = query.count()
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
    query = db.session.query(Apartment)
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
        # city = query[index].city_id
        # i.update({"city": city})
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
    return jsonify(result)

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

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
