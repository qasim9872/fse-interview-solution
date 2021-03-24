# Cards Application

## Problem statement
A bank wants to launch 2 new credit card products, C1 and C2. To receive applications for the products the bank will collect the following detail about the *applicant* in a web-form or mobile app, which the bank provides:

1. Name
2. Address
3. Email id

The submission of this form will be received by a 10x API and sent over to a Thirdparty service for eligibility decisioning. The Thirdparty provides a RESTful api which responds with one of the following eligibilities:

1. C1
2. C2
3. Both C1 and C2
4. Neither C1 nor C2

The 10x APIs should receive the response from the Thirdparty and update the user with the result of their application.

Build a synchronous 10x API to orchestrate the journey from the application submission to retrival of response. The API should call the provided Thirdparty endpoint over HTTP.

##
Thirdparty contract:

*Request*

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

*Response*

```json
{
    "eligibleCards": "Array of C1, C2, BOTH or None"
}
```

## Considerations (only for Solution Design section):
1. The bank believes that the products would be extremely popular and around 1 million requests will be received in the first hour, tailing off from there
2. The Thirdparty might take up to 10secs to respond to the request
3. The processed applications and results need to be stored for up to 7 years for audit purposes