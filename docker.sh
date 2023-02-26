# backup postgres DB
docker run -dti -p 5433:5432 -e POSTGRES_PASSWORD=postgres -v ~/backups/postgres:/var/lib/postgresql/data --name sql postgres:alpine
