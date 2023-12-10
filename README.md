# Timestamp Microservice

This is the boilerplate code for the Timestamp Microservice project. Instructions for building the project can be found at https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice

## How it works
- A request to ` /api/:date? ` with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds (as type Number)
- A request to ` /api/:date? ` with a valid date should return a JSON object with a utc key that is a string of the input date in the format: **Thu, 01 Jan 1970 00:00:00 GMT**
- A request to ` /api/1451001600000 ` should return ``` { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" } ```
- Your project can handle dates that can be successfully parsed by ` new Date(date_string)`
- If the input date string is invalid, the API returns an object having the structure ``` { error : "Invalid Date" } ```
- An empty date parameter should return the current time in a JSON object with a unix key
- An empty date parameter should return the current time in a JSON object with a utc key

## Getting started
- To clone this project, go to your terminal and run ``` git clone https://github.com/TracyMuso/Timestamp-Project.git```
- Then run ` npm i ` to install the packages then `npm start` to start the project

# Deployment 
- Find the deployed repl [here](https://boilerplate-project-timestamp.elfint.repl.co/)
- You can view the repl source code [here](https://replit.com/@ElfinT/boilerplate-project-timestamp) or in this repo, it's all the same


# Authors
- Freecodecamp.org
- Tracy Musongole @TracyMuso

