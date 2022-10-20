from flask import jsonify, request, Response
from models import app, db, Job, Apartment, City
from schema import job_schema, city_schema, apartment_schema
from sqlalchemy.sql import text, column


@app.route("/")
def home():
    try:
        db.session.query(column('1')).from_statement(text('SELECT 1')).all()
        return '<h1>GeoJobs API</h1>'
    except Exception as e:
        # e holds description of the error
        error_text = "<p>The error:<br>" + str(e) + "</p>"
        hed = '<h1>Something is broken.</h1>'
        return hed + error_text

@app.route("/cities")
def get_cities():
    return "<h1>Cities Request<h1>"

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
    return "<h1>Apartment Request<h1>"

@app.route("/cities/<int:id>")
def get_city(id):
    return f"<h1>City {id} Request<h1>"

@app.route("/jobs/<int:id>")
def get_job(id):
    return f"<h1>Job {id} Request<h1>"

@app.route("/apartments/<int:id>")
def get_apartment(id):
    return f"<h1>Apartment {id} Request<h1>"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
