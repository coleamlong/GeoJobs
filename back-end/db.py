import json
from models import app, db, City, Tag, Apartment, ApartmentImage, Job


def populate_db():
    populate_cities()
    populate_apartments()
    populate_apartment_images()
    # populate_jobs()


def populate_cities():
    twitter = open("data/policetwitter_data.json")
    twitter_data = json.load(twitter)
    twitter.close()
    with open("data/roadgoat_data.json") as jsn:
        roadgoat_data = json.load(jsn)
        for city in roadgoat_data:
            state_id = city["data"]["relationships"]["state"]["data"]["id"]
            state = [
                item["attributes"]["short_name"]
                for item in city["included"]
                if item["id"] == state_id
            ][0]
            photo = None
            if "photos" in city["data"]["relationships"]:
                photo_id = city["data"]["relationships"]["photos"]["data"][0]["id"]
                photo = [
                    item["attributes"]["image"]["full"]
                    for item in city["included"]
                    if item["id"] == photo_id
                ][0]
            known_for_ids = [
                item["id"]
                for item in city["data"]["relationships"]["known_for"]["data"]
            ]
            twitter_handle = [
                twitter["twitter"]
                for twitter in twitter_data
                if twitter["id"] == int(city["data"]["id"])
            ][0]
            db_row = {
                "id": city["data"]["id"],
                "name": city["data"]["attributes"]["short_name"],
                "state": state,
                "population": city["data"]["attributes"]["population"],
                "avg_rating": city["data"]["attributes"]["average_rating"],
                "budget": list(city["data"]["attributes"]["budget"].items())[0][1][
                    "value"
                ],
                "safety": list(city["data"]["attributes"]["safety"].items())[0][1][
                    "value"
                ],
                "walkscore_url": city["data"]["attributes"]["walk_score_url"],
                "police_twitter": twitter_handle,
                "img_url": photo,
                "tags": [],
            }
            # loop through tags and add them
            for tag_id in known_for_ids:
                tag = Tag.query.filter_by(id=tag_id).first()
                # if tag does not exist, create it
                if tag == None:
                    tag_name = [
                        item["attributes"]["name"]
                        for item in city["included"]
                        if item["id"] == tag_id and item["type"] == "known_for"
                    ][0]
                    tag = Tag(id=int(tag_id), name=tag_name)
                    db.session.add(tag)
                # add the tag
                db_row["tags"].append(tag)

            db.session.add(City(**db_row))
        db.session.commit()


def populate_apartments():
    with open("data/realitymole_data.json") as jsn:
        realitymole_data = json.load(jsn)
        apts = [apt for city in realitymole_data for apt in city]
        for apt in apts:
            if apt["city"] == "Washington":
                apt["city"] = "Washington, D.C."
            city = City.query.filter_by(name=apt["city"]).first().id
            db_row = {
                "id": apt["id"],
                "city_id": city,
                "bathrooms": apt["bathrooms"] if "bathrooms" in apt else None,
                "bedrooms": apt["bedrooms"] if "bedrooms" in apt else None,
                "price": apt["price"],
                "address": apt["formattedAddress"],
                "property_type": apt["propertyType"],
                "sqft": apt["squareFootage"] if "squareFootage" in apt else None,
                "build_year": apt["yearBuilt"] if "yearBuilt" in apt else None,
                "images": [],
            }
            db.session.add(Apartment(**db_row))
        db.session.commit()


def populate_apartment_images():
    with open("data/apartmentimage_data.json") as jsn:
        apt_imgs = json.load(jsn)
        for apt in apt_imgs:
            current_apartment = Apartment.query.filter_by(id=apt["id"]).first()
            for img in apt["images"]:
                apartment_image = ApartmentImage(apt_id=apt["id"], img_url=img)
                current_apartment.images.append(apartment_image)
                db.session.add(apartment_image)
        db.session.commit()


def populate_jobs():
    with open("data/adzuna_data.json") as jsn:
        adzuna_data = json.load(jsn)
        logos_file = open("data/companylogos_data.json")
        logos = json.load(logos_file)
        logos_file.close()
        # TODO waiting on order of cities from scraping script
        jobs = [job for city in adzuna_data for job in city["results"]]
        for job in jobs:
            logo_url = [
                company["logo"] for company in logos if company["id"] == job["id"]
            ][0]
            db_row = {
                "id": job["id"],
                "city_id": None,
                "company": job["company"]["display_name"],
                "title": job["title"],
                "category": job["category"]["label"],
                "url": job["redirect_url"],
                "salary_min": job["salary_min"],
                "salary_max": job["salary_max"],
                "latitude": job["latitude"],
                "longitude": job["longitude"],
                "description": job["description"],
                "created": job["created"],
                "img_url": logo_url,  # TODO waiting on scraped data
            }
            db.session.add(Job(**db_row))
        db.session.commit()


if __name__ == "__main__":
    with app.app_context():
        db.drop_all()
        db.create_all()
        populate_db()
