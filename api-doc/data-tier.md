# API Documentation
## Purpose and Overview
The API was designed to satisfy any data storage requirements you might run into while working on this project. Your API-Key is required to authenticate your access to the API and also to help identify your data. You will be allowed to store up to 10 JSON datasets.

**API key:** If you do not already have an API key, please reach out to your contact at Indigo Slate to receive one.

## Body Format
If the route requires a body, it must have a 'data' object in the body of the request. Data itself can be an object or a string.

## Header Format
All routes require two headers:

Key | Value
:--- | ---:
Content-Type | application/json
X-API-KEY | Your API Key (API_KEY)

## Endpoints Overview Table
**base url:** https://crud-api.azurewebsites.net

 Endpoint | Method
 :--- | ---:
 /api/create/:rowKey | POST
 /api/read/:rowKey | GET
 /api/update/:rowKey | PUT
 /api/remove/:rowKey | DELETE
 /api/peek | GET

# Endpoints Details
#### Create a New Dataset
**URL:** ```/api/create/:rowKey```
**Method:** ```POST```
**Request Body:**

Data can be passed in as a string or as an object.

```
{
    "data": "foo" || { "foo": "bar" }
}
```

#### Read a Dataset
**URL:** ```/api/read/:rowKey```
**Method:** ```GET``` \
**Success Response:** ```200 OK``` \
**Response Body:**
```
{
    "status": "true",
    "message": {
        // Data values here.
    }
}
```

**Error Response:** ```400 BAD REQUEST```

#### Peek all Datasets
**URL:** ```/api/peek```  \
**Method:** ```GET``` \
**Success Response:** ```200 OK``` \
**Response Body:**
```
{
    "status": "true",
    "message": [
        {
            "name": "RowKey",
            "data": "Data values go here"
        },
        {
            "name": "RowKey",
            "data": "Data values go here"
        }
    ]
}
```

**Error Response:** ```400 BAD REQUEST```

#### Update a Dataset
**URL:** ```/api/update/:rowKey``` \
**Method:** ```PUT``` \
**Request Body:**
```
{
    "data": {
        // Your dataset details.
    }
}
```
**Success Response:** ```200 OK```
Success Body:
```
{
    "status": true,
    "message": "updated"
}
```

**Error Response:** ```403 Unauthorized: StorageError: The specified resource does not exist.```

#### Delete a Dataset
**URL:** ```api/remove/:rowKey``` \
**Method:** ```DELETE```

**Success Response:** ```200 OK``` \
Success Body:
```
{
    "status": true,
    "message": "Deleted"
}
```

**Error Response:** ```400 BAD REQUEST```

```
{
    "status": false,
    "message": "There was an error removing."
}
```
