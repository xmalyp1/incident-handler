# Incident handler

## Install

There are two options for installing development environment.

### Local

- install [XAMPP](https://www.apachefriends.org/index.html)
- install [Node.js](https://nodejs.org/en/)
- clone this repository with [git](https://git-scm.com/)
- navigate to project directory and run `./bin/install` script

```shell
git clone git@github.com:xmalyp1/incident-handler.git
cd incident-handler
./bin/install
```

### Docker

- install [Docker](https://www.docker.com/)
- clone this repository with [git](https://git-scm.com/)
- copy `.env.example` and rename it to `.env`
- modify `DB_HOST` inside `.env` as `DB_HOST=mysql`
- set `DB_PASSWORD` and `DB_ROOT_PASSWORD` inside `.env` *(optional, because of `MYSQL_ALLOW_EMPTY_PASSWORD: 1` in `docker-compose.yml`)*
- navigate to project directory and run `./bin/docker/install` script
- after containers are started run `./bin/docker/migrate` script to apply migrations
- run with `./bin/docker/run`

```shell
git clone git@github.com:xmalyp1/incident-handler.git
cd incident-handler
./bin/docker/install
./bin/docker/migrate
./bin/docker/run
```

#### Example .env configuration

```dotenv
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=incidenthandler
DB_USERNAME=incident
DB_PASSWORD=handler
DB_ROOT_PASSWORD=secret
```
