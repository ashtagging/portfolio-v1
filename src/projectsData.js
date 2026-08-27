export const productive = [
  {
    id: 1,
    status: "active",
    title: "Productive",
    img: "./assets/portfolio-images/productive-img.PNG",
    githubLink: "https://github.com/ashtagging/productive",
    websiteLink: "#/productive",
    notionLink:
      "https://stealth-pawpaw-91a.notion.site/Productivity-App-f2de6b0493f844edabee398555cdebd1",
    about:
      "This application takes 3 commonly built applications a Calculator, Pomodoro Timer and To-do list and combines them all into one application. React was predominately used along with React Router DOM to navigate through the pages with Sass (SCSS) styling the application.",
    challenges:
      "The main challenges from this project came from the Pomodoro timer, notably getting the sound to work when the timer reached 00:00 and letting the user set different break and start times.",
    languages1: "React",
    languages2: "Sass",
    languages3: "HTML",
    packages1: "react-router-dom",
    packages2: "uniqid",
    packages3: "react-circular-progressbar",
    showWebsiteLink: true,
  },
];

export const readBay = [
  {
    id: 2,
    status: "active",
    title: "ReadBay",
    img: "./assets/portfolio-images/readbay.JPG",
    githubLink: "https://github.com/ashtagging/ReadBay",
    websiteLink: "#/readbay",
    notionLink: "",
    about: "ReadBay was my final project for my master's degree at University and received a mark of 76, well above a first. The application is a book store for large orders and was built on visual studio using .NET & C#. It incorporates databases, authentication and Stripe payments.",
    challenges: "The challenges encountered were many but included: Applying the authentication for different user accounts, adding Stripe payments, social media logins and setting the project up on Azure. ",
    languages1: "C#",
    languages2: ".NET",
    languages3: "SQL",
    packages1: "Google Login API",
    packages2: "Facebook Login API",
    packages3: "Stripe API ",
    showWebsiteLink: true,
  },
];

export const wildernest = [
  {
    id: 3,
    status: "active",
    title: "Wildernest",
    img: "./assets/portfolio-images/wildernest.jpg",
    githubLink: "https://github.com/ashtagging/Wildernest",
    websiteLink: "#/wildernest",
    notionLink: "https://stealth-pawpaw-91a.notion.site/PROJECT-Wildernest-00763cea790847459b99dd057bf39e77?pvs=4",
    about: "Wildernest is an Airbnb clone where users can create a listing for a stay which can then be booked by other users. The difference with Wildernest is that it mainly focuses on listings which are in the countryside like campsites, treehouses, cottages etc. For this project I was focusing mostly on learning project architecture and was completed post Readbay for me to practice.",
    challenges: "The main challenges for this project were incorporating the photo uploading and validation for the model, as I did it in a different way to Readbay. ",
    languages1: "C#",
    languages2: ".NET",
    languages3: "SQL",
    packages1: "Entity Framework",
    packages2: "Stripe API",
    packages3: "",
    showWebsiteLink: true,
  },
];

export const weatherApp = [
  {
    id: 4,
    status: "active",
    title: "Weather App",
    img: "./assets/portfolio-images/weather-app-img.jpg",
    githubLink: "https://github.com/ashtagging/weather-app",
    websiteLink: "",
    notionLink:
      "https://stealth-pawpaw-91a.notion.site/Weather-API-c84d5037abb347d58628a8ff58d098e6",
    about:
      "This application uses Axios to make an API call to the open weather API to retrieve information regarding the weather of a specified location. Additionally, the Unsplash API is used to generate a background image related to this location.",
    challenges:
      "The main issue I encountered when producing this project was trying to get the backend server to work so the API keys were not displayed on the front end. This was eventually achieved using express, dotenv, cors, Axios and then searching on stack overflow when stuck.",
    languages1: "React",
    languages2: "CSS",
    languages3: "HTML",
    packages1: "express",
    packages2: "axios",
    packages3: "dotenv",
    showWebsiteLink: false
  },
];

export const wardle = [
  {
    id: 5,
    status: "active",
    title: "Wardle",
    img: "./assets/portfolio-images/wardle-img.PNG",
    githubLink: "https://github.com/ashtagging/wardle",
    websiteLink: "https://wardle-app.herokuapp.com/",
    notionLink:
      "https://stealth-pawpaw-91a.notion.site/WARDLE-0fbfc20d0e704686a0e9d46a1badd942",
    about:
      "Inspired by the viral game Wordle, this application is a coded clone that utilises a dictionary API and a random word API to generate a random word and check that the guessed words are valid.",
    challenges:
      "The most challenging parts to code were the wordGuess function, which checks the word against the randomly generated word from the API and alters the colours of the tiles on the keyboard depending on their position.",
    languages1: "Javascript",
    languages2: "CSS",
    languages3: "HTML",
    packages1: "express",
    packages2: "axios",
    packages3: "dotenv",
    showWebsiteLink: false
  },
];

export const feedbackRating = [
  {
    id: 6,
    status: "active",
    title: "Feedback Rating",
    img: "./assets/portfolio-images/rating-app-img.PNG",
    githubLink: "https://github.com/ashtagging/interactive-rating-component",
    websiteLink: "#/rating-component",
    notionLink:
      "https://stealth-pawpaw-91a.notion.site/Interactive-Rating-Component-8eb345c92bb04c82bb65de916b7e0226",
    about:
      "After learning about the frontend mentor coding challenges (https://www.frontendmentor.io/), I decided to attempt one of them from scratch. I opted to use React and react-router-dom to navigate between the pages, allowing me to use state so that only one of the rating numbers could be selected at any given time.",
    challenges:
      "The main issue I had with this project was coding the project so that only one of the numbers could be selected and highlighted at any given time. I fixed this by using an object instead of a variable for the state with a variable inside that changed based on which number had been selected.",
    languages1: "React",
    languages2: "CSS",
    languages3: "HTML",
    packages1: "react-router-dom",
    showWebsiteLink: true
  },
];


