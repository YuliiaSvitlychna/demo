# nestjs-typeorm API

## Local installation

1. Run the docker container with postgres:
```bash
$ docker-compose up -d
```

2. Now you can use adminer docker container here:

- http://localhost:5431/ - postgres adminer

3. Create `.env` file based on `.env.example` file.

4. Then, install packages and build the app:

```bash
$ npm i
```

5. Apply the database migrations:
```bash
$ npm run typeorm migration:run
```

6. Launch:
```bash
$ npm run start
```

## Tests

```bash
# unit tests
$ npm run test

# unit tests with coverage
$ npm run test:cov

# e2e tests
$ npm run test:e2e
```

## Format code

```bash
# prettier format
$ npm run format

# eslint format
$ npm run lint
```

## Swagger document

Once the application has been launched, try to use [/api](http://localhost:3000/api) as your local API link.
