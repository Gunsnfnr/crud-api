# CRUD API Node.js app

## Installation

Clone this repository to your local computer: `git clone https://github.com/Gunsnfnr/crud-api`

Switch to the `develop` branch. Install the dependencies: `npm i`

## Launching

Run `npm run start:dev` for development mode or `npm run start:prod` for production mode

## Using the application

Run Postman or any other similar application.

Send your API requests to `http://localhost:8080`

The implemented endpoint is `api/users`

- **GET** `api/users` is used to get all persons
- **GET** `api/users/{userId}` to get a user with `userId`
- **POST** `api/users` is used to create a new user record and store it in database
- **PUT** `api/users/{userId}` is used to update existing user
- **DELETE** `api/users/{userId}` is used to delete existing user from database

Users are stored as `objects` that have following properties:

- `id` — unique identifier (`string`, `uuid`) generated on server side
- `username` — user's name (`string`, **required**)
- `age` — user's age (`number`, **required**)
- `hobbies` — user's hobbies (`array` of `strings` or empty `array`, **required**)
