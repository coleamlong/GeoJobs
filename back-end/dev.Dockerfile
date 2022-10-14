FROM ubuntu:latest
ENV DEBIAN_FRONTEND=noninteractive

# COPY ./badproxy /etc/apt/apt.conf.d/99fixbadproxy

RUN apt-get clean && apt-get update
RUN apt-get install -y python3
RUN apt-get install -y python3-pip python3-dev build-essential vim
RUN apt-get install -y default-libmysqlclient-dev libpq-dev postgresql

RUN pip3 install black
RUN pip3 install flask
RUN pip3 install flask-restless
RUN pip3 install flask_restful
RUN pip3 install flask_sqlalchemy
RUN pip3 install -U flask-cors
RUN pip3 install sqlalchemy
RUN pip3 install psycopg2
RUN pip3 install uWSGI

EXPOSE 5000

# Run bash
CMD bash