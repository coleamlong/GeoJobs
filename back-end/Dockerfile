FROM ubuntu:latest
ENV DEBIAN_FRONTEND=noninteractive

# https://forums.docker.com/t/hash-sum-mismatch-writing-more-data-as-expected/45940/3
# Uncomment this line and follow this if you have the same issue
# COPY ./badproxy /etc/apt/apt.conf.d/99fixbadproxy

RUN apt-get update -y
RUN apt-get install -y python3
RUN apt-get install -y python3-pip python3-dev build-essential vim
RUN apt-get -y install nginx

COPY . usr/src/back-end
COPY requirements.txt usr/src/back-end/requirements.txt

WORKDIR /usr/src/back-end

RUN pip3 install --upgrade pip
RUN pip3 install -r requirements.txt

EXPOSE 80

CMD ["python3", "waitress_server.py"]