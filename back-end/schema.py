from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from models import Job, Apartment, City, Tag
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

class TagSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Tag

job_schema = JobSchema()
apartment_schema = ApartmentSchema()
city_schema = CitySchema()
tag_schema = TagSchema()