FROM python:3.8

WORKDIR /app

COPY . .
RUN ls -l
RUN pip install -r requirements.txt

CMD ["python3","satellite_data_mining.py"]
