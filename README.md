# Background

Porcelain’s core application is a web/mobile app with the sole purpose of helping the user find a toilet! Users will help populate the database. We will be using the MERN stack (mongoDB, Express, React, NodeJS) to build our app.


Our project will heavily rely on the incorporattion of  Google Maps API with our app to implement real-time maps and location services to our Users.
Our server will be listening for incoming connections and will establish a connection between clients and our app when a request is made by a client.
We will be managing real-time display of changes regarding toilet information from the upstream and downstream communications between our server and the client.

Web/Mobile App
The app will be a basic landing page where the user will sign up /log in and help generate/read data. Like many review apps, our app will rely heavily on user participation and feedback to help generate/update many of our existing toilets.
Technical challenges:
Users will have a seamless experience on their mobile device, where user sign-up/sign-in, as well as toilet show pages and markers will be displayed primarily through modals, allowing users to quickly navigate and use our app without having to wait for re-rendering of our pages. This will be of the utmost importance to users who are most likely on-the-go while looking for a quick pit-stop.
Having an accurate Google Map API to guide users not only to an accurate bathroom location, but directions to get there as well.

## Setup 
- Clone repo 
- run `npm install` in root folder 
- run `npm install` in frontend folder 
- Create keys_dev.js in config folder, and add mongoURI like this 
```
module.exports = {
  mongoURI: 'mongodb-link-here',
  secretOrKey: 'secret'
}
```
- run `npm run dev` in root folder
- launch application in localhost:3000
