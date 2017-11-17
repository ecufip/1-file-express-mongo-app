# Basic 1 file Express application with Mongodb connection #

This is an Express application with a Mongodb connection boiled down to its most basic. Bodyparser is required to retrieve information from a POST request and store it to a collection called 'sample' in a db called 'example'. A GET request displays all of the contents of the 'sample' collection.

## Installation ##

        $ npm install

## To run ##
Ensure mongodb running. In separate terminal:

        $ mongod

Then:

        $ node app.js

