# Book and manage an intervention prototype

## Running the prototype

You can run the prototype from your local directory by running
```
npm start
```

## Using nDelius Community API search

Currently this search only works with a locally-running instance of the [Community API](https://github.com/ministryofjustice/community-api). You can run this (and the [HMPPS Auth](https://github.com/ministryofjusticehmpps-auth) service required for generating an authentication token) from that project.

Steps:
```
1. Clone the [Community API](https://github.com/ministryofjustice/community-api)
1. Navigate to the `community-api` directory
1. Run `docker-compose up` from the `community-api` directory (this will run both the Community API and the required HMPPS Auth services)
1. In a separate session, once the Community API is up and running, run the Book & Manage prototype (`npm start`) and you should be able to search for a user from a http://localhost:3000/service-user-details/search.
```

The existing user in the local dataset has a CRN of `X320741`, non-existent users will return an empty table with no data.

We're hoping to add functionality to be able to run this search on Heroku once we have VPN access to the Community API.