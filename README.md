## Project Description

The Alanis Morrisette irony and agreement analyzer will tell you if your text
is ironic and agreeable. 

Enter your text in the form, press submit, and you'll get an assessment whether it's:
- Ironic or Not Ironic
- Agreeable or Not Agreeable

## How to run the app

To start the express server, run: npm run start from the terminal

To properly hit the NLP API, set your API key to the environment variable in the .env to API_KEY

## Dependencies

  "dependencies"
    "cors": "^2.8.5",
    "dotenv": "^16.0.1",
    "express": "^4.17.1",
    "sass": "^1.51.0",
    "webpack": "^4.35.3",
    "webpack-cli": "^3.3.5"
  
  devDependencies
    "@babel/core": "^7.5.4",
    "@babel/preset-env": "^7.5.4",
    "babel-loader": "^8.0.6",
    "clean-webpack-plugin": "^3.0.0",
    "css-loader": "^5.2.7",
    "html-webpack-plugin": "^3.2.0",
    "mini-css-extract-plugin": "^0.9.0",
    "optimize-css-assets-webpack-plugin": "^6.0.1",
    "sass-loader": "^10.1.1",
    "style-loader": "^2.0.0",
    "terser-webpack-plugin": "^4.2.3",
    "webpack-dev-server": "^3.7.2"