FROM python:3.8

WORKDIR /app

COPY . .

RUN pip install -r Satellite_data_mining/requirements.txt

ENV SATELLITE_DATA_MINING_PASSWORD=$SATELLITE_DATA_MINING_PASSWORD
ENV SATELLITE_DATA_MINING_USER=$SATELLITE_DATA_MINING_USER
ENV BACKEND_API=$BACKEND_API

CMD ["python3","Satellite_data_mining/satellite_data_mining.py"]
