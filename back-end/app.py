from flask import jsonify, request, Response
from models import app, db, Job, Apartment, City
from schema import job_schema, city_schema, apartment_schema
from sqlalchemy.sql import text, column
import json


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
    query = db.session.query(City)
    count = query.count()
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
    query = db.session.query(Job)
    count = query.count()
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
    query = db.session.query(Apartment)
    count = query.count()
    result = apartment_schema.dump(query, many=True)
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
    return jsonify(result)

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
    return jsonify(result)

"""
Returns a 404 error with the given msg
"""
def return_error(msg):
    resp = Response(json.dumps({"error": msg}), mimetype="application/json")
    resp.error_code = 404
    return resp

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
