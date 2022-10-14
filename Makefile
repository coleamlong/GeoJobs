# get git config
config:
	git config -l

# get git log
GeoJobs.log.txt:
	git log > GeoJobs.log.txt
	
clean:
	rm -f *.tmp
# docker for front end: runs website on local 3001 port
frontend-docker:
	docker run --rm -i -t -p 3001:3000 -v $(PWD):/usr/front-end-docker -w /usr/front-end-docker zaunitekoopa/selenium-chrome
# Docker for running the backend as a developer on local machine
backend-dev-docker:
	docker run --rm -i -t -p 5000:5000 -v $(PWD):/usr/back-end-docker -w /usr/back-end-docker zaunitekoopa/f
#build backend
build-backend :
	docker build -t backend back-end/
#build frontend
build-frontend :
	docker build -t frontend front-end/

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