# get git config
config:
	git config -l
# get git log
GeoJobs.log.txt:
	git log > GeoJobs.log.txt
# get git status
status:
	make clean
	@echo
	git branch
	git remote -v
	git status
# download files from the Collatz code repo
pull:
	make clean
	@echo
	git pull
	git status

all: