# GeoJobs Backend
### Launching a backend development server
Run:
`docker build -t geojobs-backend-dev -f dev.Dockerfile .`
`docker run --rm -it -v 'pwd':/usr/src/backend -w /usr/src/backend -p 5000:5000 geojobs-backend-dev`
or if you have make, run:
`make build-backend`
`make backend-dev-docker`
Navigate to [localhost:5000](localhost:5000)