# get git config
config:
	git config -l

# get git log
GeoJobs.log.txt:
	git log > GeoJobs.log.txt
	
clean:
	rm -f *.tmp
# docker for front end: runs website on local 3000 port
frontend-docker:
	docker run -dp 3000:3000 front-end
# Docker for running the backend as a developer on local machine
backend-dev-docker:
	docker run -dp 5000:5000 back-end
	docker run --rm -i -t -p 5000:5000 -v $(PWD):/usr/back-end-docker -w /usr/back-end-docker back-end
#if using windows:
	docker run --rm -i -t -p 5000:5000 -v ${PWD}:/usr/back-end-docker -w /usr/back-end-docker back-end
#build backend
build-backend :
	docker build -t back-end back-end/
#build frontend
build-frontend :
	docker build -t front-end front-end/

# get git status
status:
	make clean
	@echo
	git branch
	git remote -v
	git status

# download files from the IDB code repo
pull:
	make clean
	@echo
	git pull
	git status

all: