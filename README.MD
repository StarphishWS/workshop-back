# Awesome Project Build with TypeORM

## Steps to run this project:

1. Setup database settings inside `.env` file
2. Setup firebase settings inside `firebase.json` file
3. Run `docker compose up` command
4. Run `docker exec -it workshop-api /bin/sh` command
5. Run `yarn run typeorm migration:run` command
6. Run `yarn run dev` command

## Migration:
1. Run `docker exec -it workshop-api /bin/sh` command
2. Run `yarn run typeorm migration:generate -n "my-migration"` command
3. Run `yarn run typeorm migration:run` command

