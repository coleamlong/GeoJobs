from flask import Flask, jsonify, request, Response
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.debug=True

@app.route("/")
def home():
    return "<h1>GeoJobs API<h1>"

@app.route("/cities")
def get_cities():
    return "<h1>Cities Request<h1>"

@app.route("/jobs")
def get_jobs():
    return "<h1>Jobs Request<h1>"

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
