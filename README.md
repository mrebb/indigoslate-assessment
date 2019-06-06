# Hiring Assessment

Thank you for taking the time to complete Indigo Slate Engineering's full stack assessment.
You may spend as much or as little time as you choose, however this assessment was designed to take approximately 4 hours.

**API KEY is required**: If you do not already have an API key, please reach out to your contact at Indigo Slate to receive one.


## Assessment Scenario
An Indigo Slate client is hosting a three-day conference. The client is coordinating with several vendors to schedule presentations, panels, and interactive demos for their event. Indigo Slate has been tasked with creating a scheduling app to help keep things organized.

### Task
You will build the event management application for this client. The client wants to be able to arrange events using an admin panel- where they can  create, edit, or delete events from the schedule.

### Requirements
* **Create an Event API back-end** - You will provide the endpoints for data manipulation for the view.
    * This API is separate from the data storage API provided.
* **Utilize the provided CRUD storage API as the data tier** - This provides storage for your Event API backend. 
    * See the [documentation](api-doc/data-tier.md).
* The schedule will span across **3 days.**
* Events should **not** overlap.
* Authenticate the Admin View to the Event API using **Basic Authentication**. (Only a single set of credentials is necessary.)
* We've provided a front-end to help you get started. Feel free to adjust as necessary.
    * Hint: The front-end we've provided is pretty bland... :sadface

### Data Storage
**You should not create your own data tier for this project.** A data storage API has been provided for you, please reference this [API documentation](api-doc/data-tier.md).

### Notes/Hints
* Carefully consider the requirements before you code.
* There are multiple ways to solve this problem. No one way is the best.
* You are limited to the data api provided. Please do not create any additional data tiers.
* The front-end view is provided for ease, however do not feel constrained by its current set up. If you do not like it, please change it.
* There are multiple ways to store event data, even with the data tier constraint. Multiple endpoints of the data api are available for your use. 
    * Hint: Depending on how you choose to structure your data, you may not need to use all of the endpoints provided.
* Consider this project to be 70% back-end, 30% front-end. We would like to see your skills in both.
* If you are unable complete all of the requirements, please submit what you have.

### Submitting the Assessment
* Once you have completed the assessment, upload it to github and submit your work at the url below.
    * Note that once submitted, your API_KEY will be invalidated. Please ensure you've thoroughly tested your work prior to submitting.
    * **Submission URL**: [https://crud-api.azurewebsites.net]

**If you have any additional questions about the application please reach out to your recruiter.**


# Front-end Framework - Vue.js  (this repository)

### Project setup
* Clone this repository
* Install dependencies
```
npm install
```
### Getting Started
```
// serve for development
npm run serve

// Compiles and minifies for production
npm run build
```
