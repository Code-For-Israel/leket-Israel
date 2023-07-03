FROM python:3.8

WORKDIR /app

COPY . .

RUN pip install -r Satellite_data_mining/requirements.txt

ENV SATELLITE_DATA_MINING_PASSWORD=${{ secrets.SATELLITE_DATA_MINING_PASSWORD }}
ENV SATELLITE_DATA_MINING_USER=${{ secrets.SATELLITE_DATA_MINING_USER }}
ENV BACKEND_API=${{ secrets.BACKEND_API }}

RUN echo "$BACKEND_API"
RUN echo "$SATELLITE_DATA_MINING_USER"
RUN echo "SATELLITE_DATA_MINING_PASSWORD: $SATELLITE_DATA_MINING_PASSWORD"

CMD ["python3","Satellite_data_mining/satellite_data_mining.py"]
