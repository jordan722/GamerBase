# GamerBase-frontend

GamerBase is a Full-Stack app built for the Jan 2020 CUNY2X bootcamp. This repository servers as the front end for the app. Built with React, Redux, PostgreSQL, Node.js, and other supported packages

Group: Jordan Yaqoob, Kendrick Shao, Kun Yu, Sami Beig

## Running

Use the package manager npm to install all prerequisite packages and start.

```bash
npm install
npm start
```

# Link to Deployed Web-App

This web app was deployed using heroku, and can be accessed [here!](http://gamerbase.herokuapp.com/)


# Home Page

Upon clicking on the link, there is a NavBar with the name of the project (GamerBase), a 'Log in', 'Sign up' and 'Forums' button, each linking to another aspect of the application.

Below the navbar, there are three rows with three seperate categories -- Top Rated, Trending, and Upcoming Games. Each row has a horizontal scroll feature with games that are pulled directly from the rawg API, based on each category. Each game is clickable, and will link the user to that specific game's custom page.

# Games Page

Upon clicking on any game from the Home Page, the application will render the game's cover picture, release date, rating, options to buy the game, see a clip, and view the subreddit, and active streams that are associated with the game. This info is pulled from the rawg, Twitch, Reddit, Mixer, and YouTube respectively. 

# Sign up Page

In order to get the full experience of our web app, we implimented a user authentication system in order to exclusively access certain functionalities. Pressing the 'Sign up' button will prompt the user to enter their name, email, and password that will be associated with their account. Upon signing up, the Navbar will adjust accordingly, displaying the user's name next to the 'Log in' button.

# Log in Page

Returning to continue accessing our web app? No need to sign up again! Click the 'Log in' button and use the same email and password associated with your account!

# Forums

A unique functionality that we implemented in our web app was a forum page. This allows users to interact with one another based on their shared interest in video games. 
**Note: you must be logged in in order to create/reply to a thread!**
Threads/replies are updated with each post, and accurately display the creator's name, last updated, and reply count respectively.

This web app was inspired by our love for video games and coding, and we hope users who share the same passion will appreciate this new web app!
