const imageDir = './assets/images/works/';

const portfolioList = [
  {
    title: 'Roadtrip Planner',
    image: `${imageDir}portfolio-roadtrip.jpg`,
    pageLink: 'https://yuko-roadtrip-planner.herokuapp.com/',
    codeLink: 'https://github.com/yuda0110/Travelligence',
    description: 'This MERN application is a roadtrip planner where the user can enter their desired trips name, origin, destination, and stopover points which the google maps Directions API will use to calculate and display your road trip.\n' +
      '\n' +
      'Based off your journey\'s desired stopover points, we utilize the YELP API to show you the highest rated restaurants at the area of your stop that fit your budget.\n' +
      '\n' +
      'It notifies you when another user has planned a trip to your destination so you can hitch a ride.',
    techs: [
      'JavaScript',
      'Node.js',
      'Create React App',
      'React Router Dom',
      'Express',
      'Mongoose',
      'Axios',
      'Socket.io',
      'Socket.io-client',
      'Dotenv',
      'React-google-maps',
      'React-google-places-autocomplete',
      'Nodemon'
    ]
  },
  {
    title: 'Google Books Search',
    image: `${imageDir}portfolio-googlebook.jpg`,
    pageLink: 'https://yuko-google-books-search.herokuapp.com/',
    codeLink: 'https://github.com/yuda0110/GoogleBooksSearch',
    description: 'React-based Google Books Search app. This project requires to create React components, work with helper/util functions, and utilize React lifecycle methods to query and display books based on user searches. Used Node, Express and MongoDB so that users can save books to review or purchase later. Also use React routing and socket.io to create a notification that triggers whenever a user saves a book.',
    techs: [
      'JavaScript',
      'Node.js',
      'Create React App',
      'React Router Dom',
      'Express',
      'Mongoose',
      'Axios',
      'Socket.io',
      'Socket.io-client'
    ]
  },
  {
    title: 'Clicky Game',
    image: `${imageDir}portfolio-clickygame.jpg`,
    pageLink: 'https://yuda0110.github.io/ClickyGame/',
    codeLink: 'https://github.com/yuda0110/ClickyGame',
    description: 'A memory game with React. This assignment will require to break up your application\'s UI into components, manage component state, and respond to user events.',
    techs: [
      'JavaScript',
      'Node.js',
      'React.js',
      'gh-pages'
    ]
  },
  {
    title: 'Travelligence',
    image: `${imageDir}portfolio-travelligence.jpg`,
    pageLink: 'https://blue-project-2.herokuapp.com/',
    codeLink: 'https://github.com/Adoni0/blue-project-2',
    description: 'This project is travel application for people who can’t decide where to take their next vacation. The application prompts the user to fill out a simple sign up form and our algorithm utilizes data from the users location, estimated age, estimated culture, and a few uploaded photos to recommend a country to visit.',
    techs: [
      'JavaScript',
      'jQuery',
      'Node.js',
      'Express',
      'Express-handlebars',
      'Microsoft Computer Vision API',
      'Passport',
      'geoip-lite',
      'agify.io',
      'nationalize.io',
      'genderize.io'
    ]
  },
  {
    title: 'JS News Scraper',
    image: `${imageDir}portfolio-newscraper.jpg`,
    pageLink: 'https://yuko-news-scraper.herokuapp.com/',
    codeLink: 'https://github.com/yuda0110/NewsScraper',
    description: 'A web app that lets users view and leave comments on the latest news. The app scrapes stories from a news outlet and update the articles listed on the page when a user clicks on the load button.',
    techs: [
      'JavaScript',
      'jQuery',
      'Node.js',
      'Express',
      'Express-handlebars',
      'Morgan',
      'Nodemon',
      'Axios',
      'Cheerio',
      'Mongoose'
    ]
  },
  {
    title: 'Eat-Da-Burger',
    image: `${imageDir}portfolio-burger.jpg`,
    pageLink: 'https://yuko-sequelized-burger.herokuapp.com/',
    codeLink: 'https://github.com/yuda0110/sequelized-burger',
    description: 'A burger menu / ordering app with a homemade ORM. Used Node and MySQL to query and route data in your app, and Handlebars to generate HTML.',
    techs: [
      'JavaScript',
      'jQuery',
      'Node.js',
      'Express',
      'Express-handlebars',
      'Morgan',
      'Nodemon',
      'Mysql2',
      'Sequelize'
    ]
  },
  {
    title: 'Friend Finder',
    image: `${imageDir}portfolio-friendfinder.jpg`,
    pageLink: 'https://yuko-friend-finder.herokuapp.com/',
    codeLink: 'https://github.com/yuda0110/friend-finder',
    description: 'A compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from your users\' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.',
    techs: [
      'JavaScript',
      'jQuery',
      'Node.js',
      'Express',
      'Morgan',
      'Nodemon',
      'Path',
      'Ionicons'
    ]
  },
  {
    title: 'Bamazon',
    image: `${imageDir}portfolio-bamazon.jpg`,
    pageLink: 'https://github.com/yuda0110/bamazon#what-each-command-should-do',
    codeLink: 'https://github.com/yuda0110/bamazon',
    description: 'Amazon-like storefront with the MySQL. There are 3 parts to the app.\n' +
      '\n' +
      'The 1st part, bamazonCustomer takes in orders from customers and deplete stock from the store\'s inventory.\n' +
      '\n' +
      'The 2nd part, bamazonManager shows products for sale, shows low inventory, adds to inventory, and adds new product.\n' +
      '\n' +
      'The 3rd part, bamazonSupervisor shows product sales by department and creates new department.',
    techs: [
      'JavaScript',
      'Node.js',
      'MySQL',
      'inquirer',
      'Console-table-printer'
    ]
  },
  {
    title: 'LIRI Bot',
    image: `${imageDir}portfolio-liri.jpg`,
    pageLink: 'https://github.com/yuda0110/liri-node-app#what-each-command-should-do',
    codeLink: 'https://github.com/yuda0110/liri-node-app',
    description: 'LIRI is like iPhone\'s SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.',
    techs: [
      'JavaScript',
      'Node.js',
      'Node-Spotify-API',
      'Axios',
      'Moment',
      'DotEnv',
      'fs'
    ]
  },
  {
    title: 'GifTastic',
    image: `${imageDir}portfolio-giftastic.jpg`,
    pageLink: 'https://yuda0110.github.io/GifTastic/',
    codeLink: 'https://github.com/yuda0110/GifTastic',
    description: 'Use the GIPHY API to make a dynamic web page that populates with gifs of your choice.',
    techs: [
      'HTML',
      'CSS',
      'JavaScript',
      'jQuery',
      'GIPHY API',
      'localStorage'
    ]
  },
  {
    title: 'Star Wars RPG Game',
    image: `${imageDir}portfolio-starwars.jpg`,
    pageLink: 'https://yuda0110.github.io/unit-4-game/',
    codeLink: 'https://github.com/yuda0110/GifTastic',
    description: 'Interactive game for web browsers. Dynamically update the HTML pages with the jQuery.',
    techs: [
      'HTML',
      'CSS',
      'JavaScript',
      'jQuery'
    ]
  }
];

export default portfolioList;