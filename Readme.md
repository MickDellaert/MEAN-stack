# Title: MEAN

- Repository: `MEAN-stack`
- Type of Challenge: `Learning Challenge`
- Duration: `5 days`
- Deployment strategy : 
	- Github page
	
- Team challenge : `solo`


## The Mission
MEAN (MongoDB, Express.js, AngularJS (or Angular), and Node.js) is a free and open-source JavaScript software stack for building dynamic web sites and web applications. Because all components of the MEAN stack support programs that are written in JavaScript, MEAN applications can be written in one language for both server-side and client-side execution environments.

Even though our focus lies heavily on the frontend, it can't hurt to have a little of backend knowledge as well. Up until now we have always used a node server to store data, but now we are going to use node to get the data from the server to a database. By now you should be able to use Express, Angular and Node to a certain extent, so the only new stuff you will see with this exercise will be MongoDB.

To make use of our database we will need the mongoose dependency for node and a mongoDB atlas account, which will be included in the steps.

Using this stack, we will enhance our previous friend book application so that the data isn't stored on the server, but in a database instead.

## Must-have features

- A Friend class on the client with some fields that you find interesting to keep in a friend book
- A Friend schema on the server to make it easy for you to get data from the client to the database and vice versa
- A Friend model to contain your friends data on the server
- Using the mongoose queries, make a CRUD system to create, update, read and delete friends on your database
- Make it look visually pleasing and add responsiveness


## Steps

1. Make a server - client structure in your project
    - initialise a new angular app in the client folder
    - initialise a new node server in the server folder
2. Make a connection using express with your server
3. Make a friend class on your client with some fields that seem interesting to you
4. Make a test get request to see if your connection works, you will use this later to get your friends from the database
5. Make a test post request to see if you can post data to your server, you will use this later to post friends to your database
6. Now comes the unfamiliar part, first of all make a mongoDB atlas account
    - https://www.mongodb.com/cloud/atlas/register
7. On your account, you should be able to make a new cluster. This will contain the database that we will use, go ahead and make one!
8. Your newly added cluster will contain a feature to connect to it. Once you click the connect button there will be a few steps to follow
    - There's a complete step by step guide on the website to set up your connection security, follow it.
    - After that we just need to choose a connection method, which will be explained in the next step
9. We will use a connection string to make a connection with our database, which we can get by choosing mongoDB compass as our connection method
    - You will be prompted to use the application "MongoDB Compass", which you can if you want, but is not required.
    - The connection string you see is what we really need, but swapping the <password> in it with your real password is required.
10. Let's start making a connection in our server using mongoose
    - Follow this guide https://mongoosejs.com/docs/
    - When we do mongoose.connect, use your connection string with the correct password instead of the suggestion on the guide
    - When the guide starts talking about kittens, do not follow along but it will explain some stuff that you will need later on, so do read it.
    - Do a console log in your db.once('open') function and launch your client and server. If everything works you should see this log in your server.
11. Now that we have a connection, we need to make a Schema that corresponds with our Friend class. Please do so
12. This new schema can be appended to a model, which will make it very easy for us to work with our friends
    - `const Friend = mongoose.model("Friend", friendSchema, "friends");`
    - Make a new friend on the server using this model
    - For now, hardcode all the values of the fields like so `friend.fName = "Jef";`
    - Add the hardcoded friend to your database using the .save() method
    - Run your project and see if your data got added to the database
13. Now that we can add a friend, let's retrieve all friends.
    - Do a find query on your Friend model
    - Because it is async, you can access the result of the query in the "then" part, like we used to when fetching from an API
    - Console log this data, if you get all your friends you're good to go!
14. Time to go back to our dummy post and get requests that we made
    - Use the get request to display all your friends on the client
    - Use the post request to post a friend and add it to the database in your server
15. Now we have our create and read part of the CRUD done, now add the update and delete functionality. I trust fully in your capabilities to figure it out from now on!

Tip: Almost everything up until step 15 is stuff you already can do! Except for working with mongoose, don't forget to check out their docs!

https://mongoosejs.com/docs/guides.html

Some keywords you might need to research:

- Schemas
- SchemaTypes
- Connections
- Models
- Documents
- Subdocuments
- Queries
