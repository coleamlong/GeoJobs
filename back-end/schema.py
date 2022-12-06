from flask_marshmallow import Marshmallow
from models import Job, Apartment, City, Tag, ApartmentImage
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema, fields

ma = Marshmallow()

class JobSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Job

class CitySchema(SQLAlchemyAutoSchema):
    class Meta:
        model = City

class TagSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Tag

class AptImageSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = ApartmentImage

class ApartmentSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Apartment
    images = fields.RelatedList(fields.Nested(AptImageSchema))

job_schema = JobSchema()
apartment_schema = ApartmentSchema()
city_schema = CitySchema()
tag_schema = TagSchema()
apt_img_schema = AptImageSchema()