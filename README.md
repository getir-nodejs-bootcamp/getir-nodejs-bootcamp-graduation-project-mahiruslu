<h1 align="center">Welcome to getir-nodejs-bootcamp-graduation-project-mahiruslu 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/getir-nodejs-bootcamp/getir-nodejs-bootcamp-graduation-project-mahiruslu#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/getir-nodejs-bootcamp/getir-nodejs-bootcamp-graduation-project-mahiruslu/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/getir-nodejs-bootcamp/getir-nodejs-bootcamp-graduation-project-mahiruslu/blob/master/LICENSE" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/github/license/getir-nodejs-bootcamp/getir-nodejs-bootcamp-graduation-project-mahiruslu" />
  </a>
</p>

> We’d like you to create a RESTful API with a single endpoint that fetches the data in the provided MongoDB collection and return the results in the requested format.
 Requirements
 - The code should be written in Node.js using express framework
 - The endpoint should just handle HTTP POST requests.
 - The application should be deployed on AWS or Heroku. You don’t need to use any API Gateway, Load Balancers or any other layer than the developed application.
 - The up to date repo should be publicly available in Github, Bitbucket or equivalent.

### 🏠 [Homepage](https://github.com/getir-nodejs-bootcamp/getir-nodejs-bootcamp-graduation-project-mahiruslu#readme)

## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

## Run tests

```sh
npm run test
```
# Api Reference

## Url
https://getir-graduation-mahiruslu.herokuapp.com/

## Endpoints

`/api/report` > This will return a json object format

## Post parameters to the endpoint

| Parameter  | Type  | Desc / Format |
| :------------ |:---------------:| -----:|
| startDate      | String | Start Date (YYYY-MM-DD) |
| endDate      | String        |  End Date (YYYY-MM-DD) |
| minCount | Number        |    Minimum count value |
| maxCount | Number        |    Maximum count value |

## Returning Format
`{
    "code": "0",
    "msg": "Success",
    "records": [
        {
            "key": "TAKwGc6Jr4i8Z487",
            "value": "Getir Task",
            "count": 310
        }
    ]
}`

| Parameter | Values |  Description |
| :------------ |:---------------:| -----:|
| code      | 0,4,5  | Result code. 0 means success |
| msg      | Success,Error    | Short result message |
| records | ...  | If everthing is ok, returns record datas. |
| details | ...  | If there is any error, returns error message. |

## Author

* Github: [@getir-nodejs-bootcamp](https://github.com/getir-nodejs-bootcamp)


## 📝 License

This project is [ISC](https://github.com/getir-nodejs-bootcamp/getir-nodejs-bootcamp-graduation-project-mahiruslu/blob/master/LICENSE) licensed.
