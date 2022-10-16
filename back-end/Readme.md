# GeoJobs Backend
### Launching a backend development server
Run:<br />
`docker build -t geojobs-backend-dev -f dev.Dockerfile .`<br />
`docker run --rm -it -v 'pwd':/usr/src/backend -w /usr/src/backend -p 5000:5000 geojobs-backend-dev`<br />
or if you have make, run:<br />
`make build-backend`<br />
`make backend-dev-docker`<br />
Navigate to [localhost:5000](localhost:5000)<br />