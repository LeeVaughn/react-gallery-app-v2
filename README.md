# Flickr Image Gallery App

A React application that uses the Flickr API to create an image gallery

## Motivation

This project was created as a part of the Treehouse Full Stack JavaScript Techdegree program

## Features

* Gives the user the option to display images from three default categories
* The user can also search for different types of images
* 24 images are displayed
* A load indicator displays each time the app fetches new data
* A user-friendly message is displayed if there are no matches to a search
* A 404 page is displayed if the user tries to access a URL that does not exist

## To Run

* Download project files by running ```git clone https://github.com/LeeVaughn/react-gallery-app-v2```
* Navigate to the project folder
* Install dependencies with ```npm install```
* You will need to create your own config.js file using this format:

``` javascript
const apiKey = "...";

export default apiKey;
```

* The config.js file should be saved in src directory
* Run the program by using the ```npm start``` command

## Built With

* [Node.js](https://nodejs.org/en/)
* [React](https://reactjs.org/)
* [Create React App](https://github.com/facebook/create-react-app) See below for more info

## Dependencies

* Coming soon!

## API

* [Flickr](https://www.flickr.com/services/api/)

## Links

* Live Link: coming soon!
* [Repository](https://github.com/LeeVaughn/react-gallery-app-vs)

## Author

[Daniel Lee Vaughn](https://github.com/LeeVaughn)

## About Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
