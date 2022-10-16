# GeoJobs Backend
### Launching a backend development server
Run:<br />
`docker build -t geojobs-backend-dev -f dev.Dockerfile .`<br /><br />
`docker run --rm -it -v 'pwd':/usr/src/backend -w /usr/src/backend -p 5000:5000 geojobs-backend-dev`<br /><br />

If you're on windows, run this instead:<br />
`docker run --rm -it -v ${pwd}:/usr/src/backend -w /usr/src/backend -p 5000:5000 geojobs-backend-dev`<br /><br />

or if you have make, run:<br /><br />
`make build-backend`<br /><br />
`make backend-dev-docker`<br /><br />

Navigate to [localhost:5000](localhost:5000)<br />