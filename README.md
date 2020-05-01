Welcome to the IKO-Test-Backend project!

## Quick start

* Project Requirements: `Git`, `>= Node 12.0.0`, `>= Npm 6.2.0`
* Infrastructure Requirements: `>= MongoDB 2.6.10`
 
Install requirements, set environment variables, apply database dumb and run the command `npm start`.

### To apply the database dump use the following command

dump file location - `./dump/`
`mongorestore  dump/`

This project includes our Api, based on NodeJs / Express.

## Ecosystem

#### MongoDB

* Version: `>= 2.6.10`

You will need to ensure that MongoDB is configured to run this project

## Configuration * Env Vars

* `MONGODB_URI` -> The MongoDb connection string. See [MongoDB Connection String URI format](https://docs.mongodb.com/manual/reference/connection-string/#standard-connection-string-format) for more information

# API endpoints:

Parameters will generally be sent as GET query parameters. Responses will be encoded as JSON.

### Api endpoint to get products:
```
/api/products/
```

method: ```GET ```

### Api endpoint to get single product:
```
/api/products/
```

method: ```GET ```
parameters  - ```{ 'productId': <string> product id }```