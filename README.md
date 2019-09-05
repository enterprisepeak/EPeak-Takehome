### ECS Takehome

This takehome assignment will be comprised of two parts: back-end and front-end. This is meant to test your basic proficiency with basic javascript along with some popular frameworks. This should take 1-2 hours. These two pieces are independent of each other so feel free to do them in whichever order.

#### Getting started
Once you have the code on your machine, all you will have to do is `npm ci` and then do an `npm start` for the back end portion. For the front end portion, just make sure to put all of your code into the `client/` folder.


#### Back-end
Here you will be tested on your proficiency working on a server with the [Hapi framework](https://hapi.dev/api/?v=18.3.2). Your task is to create a CRUD api for users. You will be able to use (and update) `database/users.js` to work with users.

The api should:
- allow someone to create a user
- allow someone to get a user by id
- allow someone to update a user by
- allow someone to delete a user by id
- validate user inputs for all of the above

If you are unfamiliar with hapi, you can look to `server/plugins/users/routes/searchField` as an example. You can also see how the routes are registered in `server/plugins/users/index`.

#### Front-end
Here you will be tasked with creating a typeahead component. This component will connect to the server in order to produce a list of clickable results. Here you may use your preferred library of choice for front end. Your code should go into the `client/` folder. The server endpoint has already been implemented for you. You should be able to connect to it making the following request.
```GET http://localhost:8000/user/search/first?like=c```

The component should:
- Be an input box
- Should show a list of results below
- Should show a loading indicator (can be very basic, just text is fine)
- Should allow a user to click on one of the results to select it (it should show that value in the input).

Notes:
- Do not feel the need to integrate this page whatsoever with the server (that would probably be too time consuming). Use a scaffolding tool if you feel that it would help you complete this in a more reasonable timeframe.

#### On Complete
Upload your code to github and add bkapus2 and lydia-p as collaborators. 