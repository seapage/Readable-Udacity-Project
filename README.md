#CONFIGURATION
Open frontend catalogy and edit files
.env.development.local - for development
.env.production.local - for build version
define REACT_APP_SERVER_BACK using url where will be work server
(can you explain me why .env doesn't work?)

#To enable application
Open two instance of terminal:
-In first one put:
	- cd api-server
    - node server
-in second one put:
	-cd frontend
    - npm start
    
    
Nextly open browser on 3001 port


# Readable API Server

This is the starter project for the final assessment project for Udacity's Redux course where you will build a content and comment web app. Users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.

This repository includes the code for the backend API Server that you'll use to develop and interact with the front-end portion of the project.

## Start Developing

To get started developing right away:

* Install and start the API server
    - `cd api-server`
    - `npm install`
    - `node server`
* In another terminal window, install and start the pre-scaffolded Create React App project
    - `cd frontend`
    - `npm install`
    - `npm start`

## API Server

Information about the API server and how to use it can be found in its [README file](api-server/README.md).

## Access The API Server

To accesss the backend server in your code, we have stored the URL to the API server in the environment variable `REACT_APP_BACKEND` which you can access in your code using `process.env.REACT_APP_BACKEND`. You can see this in action in `frontend/src/App.js` in `componentDidMount`.
