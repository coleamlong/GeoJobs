from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from models import Job, Apartment, City
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema

ma = Marshmallow()

class JobSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Job

class ApartmentSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Apartment

class CitySchema(SQLAlchemyAutoSchema):
    class Meta:
        model = City

job_schema = JobSchema()
apartment_schema = ApartmentSchema()
city_schema = CitySchema()