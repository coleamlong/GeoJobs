from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.debug=True
# TODO replace placeholder URI
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://<PLACEHOLDER URI>'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
db = SQLAlchemy(app)

# Define Job model
# TODO Ensure field names are exactly as they appear in the database
# TODO Ensure all fields in database are present here
class Job(db.Model):
    job_id          = db.Column(db.Integer, primary_key=True)
    job_city        = db.Column(db.Integer)
    job_company     = db.Column(db.String())
    job_title       = db.Column(db.String())
    job_category    = db.Column(db.String())
    job_url         = db.Column(db.String())
    job_salary_min  = db.Column(db.Integer)
    job_salary_max  = db.Column(db.Integer)
    job_latitude    = db.Column(db.Float)
    job_longitude   = db.Column(db.Float)
    job_description = db.Column(db.String())    # TODO Verify if this should or should not be of type Text
    job_created     = db.Column(db.DateTime)

# Define Apartment model
class Apartment(db.Model):
    apartment_id            = db.Column(db.Integer, primary_key=True)
    apartment_city_id       = db.Column(db.Integer)
    apartment_bath_count    = db.Column(db.Integer)
    apartment_bed_count     = db.Column(db.Integer)
    apartment_price         = db.Column(db.Integer)
    apartment_address       = db.Column(db.String())
    apartment_property_type = db.Column(db.String())
    apartment_sqft          = db.Column(db.Integer)
    apartment_build_year    = db.Column(db.Integer)
    #apartment_photos = ???

class City(db.Model):
    city_id             = db.Column(db.Integer, primary_key=True)
    city_name           = db.Column(db.String)
    city_pop            = db.Column(db.Integer)
    city_avg_rating     = db.Column(db.Float)
    city_budget_score   = db.Column(db.Integer)
    city_safety_score   = db.Column(db.Integer)
    city_pd_twitter     = db.Column(db.String())
    city_image_url      = db.Column(db.String())
    #city_known_for = ???
