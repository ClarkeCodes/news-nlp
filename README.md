# Project Instructions

The goal of this project is to give you practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

## Usage 
### Setting up the Project :computer:
Fork the project Github repo, and then clone or download the zip file locally. Once you have the project locally, navigate to the project directory to install all dependencies. 

```
cd <project directory>
npm install
```

### Signup for an API key :key:
First, you will need to go [here](https://www.meaningcloud.com/developer/) and register for an account. Signing up will get you an API key.

At the root of the project, create a new file named `.env`. Inside the file, add the following line, replacing the stars with your personal API key. 

`API_KEY=**************************`

### After setup

After you've created your local copy and added your API key to the `.env` file, you're ready to start using it! 

Use the following command to start the developer server. This should open a new window in your browser with the app running on `localhost:3000`
```
npm run build-dev
```
To run the production server (with express), run these commands
```
npm run build-prod
npm run start
```
This will create a `dist` folder with the built code. The production server runs on `localhost:8081`

Now the app should be all set and ready to use. You can enter your own text into the form to analyze it, or enter a URL to an article of blog post instead. 

## Deploying

A great step to take with your finished project would be to deploy it! Unfortunately its a bit out of scope for me to explain too much about how to do that here, but checkout [Netlify](https://www.netlify.com/) or [Heroku](https://www.heroku.com/) for some really intuitive free hosting options.

## Sources
- [Validator](https://www.npmjs.com/package/validator) for checking if string is URL or plain text
- [MeaningCloud Sentiment Analysis](https://www.meaningcloud.com/developer/sentiment-analysis)
- [JSDOM](https://github.com/jsdom/jsdom)