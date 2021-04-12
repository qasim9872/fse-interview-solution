# Cards Application

## Problem statement

A bank wants to launch 2 new credit card products, C1 and C2. To receive applications for the products the bank will collect the following detail about the _applicant_ in a web-form or mobile app, which the bank provides:

1. Name
2. Address
3. Email id

The submission of this form will be received by a Tradeledger API and sent over to a Thirdparty service for eligibility decisioning. The Thirdparty provides a RESTful api which responds with one of the following eligibilities:

1. C1
2. C2
3. Both C1 and C2
4. Neither C1 nor C2

The Tradeledger APIs should receive the response from the Thirdparty and update the user with the result of their application.

## Exercise Overview

FE

1. A React Bootstrap app
2. Build Automation Tool - Node Product Manager

BE

1. A Microservices with Spring Boot
2. Build Automation Tool - Gradle

## How to Run

Open the project with IntelliJ or Eclipse or any other IDE of your choice

FE
1. Go To terminal.
2. cd client/cards -- Browse to Directory i.e. client/cards

1. npm run install -- to install the app
2. npm run test -- to test the app
3. npm run start -- to run the app
4. npm run bootstrap - Installs dependencies of the project and all submodules and links them together
5. npm run clean - Cleans dependencies of the project and all submodules
6. npm run reinstall - Cleans and installs fresh dependencies

BE
1. Go To terminal.
2. cd server/cards --- Browse to Directory i.e. server/cards

1. ./gradlew build -- to build the solution
2. ./gradlew test -- to unit test the solution
3. ./gradlew bootRun -- to build the solution
4. ./gradlew clean -- to clean the solution

or alternatively you can use IDE's builtin plugin for Gradle for these Gradle goals

## Task

1. For BE, in /server, build a synchronous Tradeledger API to orchestrate the journey from the application submission to retrieval of response. The API should call the provided Thirdparty endpoint over HTTP.
2. For FE, in /client, implement a call to the API you've just built and display the results using the provided components.

##

Thirdparty contract:

_Request_

```
POST /eligibility/check
```

```json
{
  "name": "String",
  "email": "String",
  "address": "String"
}
```

_Response_

```json
{
  "eligibleCards": "Array of C1, C2, BOTH or None"
}
```

## Considerations (only for Solution Design section):

1. The bank believes that the products would be extremely popular and around 1 million requests will be received in the first hour, tailing off from there
2. The Thirdparty might take up to 10secs to respond to the request
3. The processed applications and results need to be stored for up to 7 years for audit purposes
