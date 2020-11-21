# Coffee APP 

Coffee APP is an e-commerce mobile application for line of coffee machines and custom coffee pods. you have two screens: one screen to display coffee machines and one screen to display coffee pods.
## Installation
You can run Coffee APP in this following simple steps :

```sh
$ git clone  https://github.com/mahmoudsror/coffeeAPP_backend_task.git

$ cd coffeeAPP_backend_task/

$ cp backend/Dockerfile.dev backend/Dockerfile
$ cp .env.dev .env

$ docker-compose up -d --build

```

Now you should have coffee app (backend - Database ) containers up 

## Usage

It is time use Coffee APP through its API, 

Use this Url For documentation to : http://localhost:4000/docs/#/


## Testing 

To run tests follow below steps :
```sh

$ cd coffeeAPP_backend_task/

$ cp backend/Dockerfile.test backend/Dockerfile

$ cp .env.test .env

$ docker-compose up -d --build

$ docker-compose exec backend sh -c "npm run test"

```
