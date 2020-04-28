docker build -t gypstore-api-v3 .
docker tag d3c8196e0e42 asia.gcr.io/big-liberty-261803/gypstore-api:latest
docker push asia.gcr.io/big-liberty-261803/gypstore-api:latest