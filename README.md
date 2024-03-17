# social-network-api

## Description
This API is for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. 

# User Story
AS A social media startup

I WANT an API for my social network that uses a NoSQL database

SO THAT my website can handle large amounts of unstructured data

# Acceptance Criteria
GIVEN a social network API

WHEN I enter the command to invoke the application

THEN my server is started and the Mongoose models are synced to the MongoDB database

WHEN I open API GET routes in Insomnia for users and thoughts

THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia

THEN I am able to successfully create, update, and delete users and thoughts in my database

WHEN I test API POST and DELETE routes in Insomnia

THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

### Mock-Up
N/A

## Installation-Execution
Walkthrough video (note, this walkthrough was done using Thunder Client as the API client extension):

Seed and Start

<video controls src="./Assets/seedandstart.mp4" title="Seed and Start"></video>

GETS

<video controls src="./Assets/gets.mp4" title="GETS"></video>

PUT/POST/DELETE

<video controls src="./Assets/putpostdelete.mp4" title="PUTPOSTDELETE"></video></video>

To run the ecommerce_backend app, do the following:

1. Open a command terminal, go to the ecommerce backend folder.

2. Open mysql and create the database:

mysql -uroot -p

source db/schema.sql

3. In the command terminal, seed the database:

npm run seed

4. Start the ecommerce backend:

npm run start

1. Once the connection is made, you can use your favorite web API testing app to test the following:

Category endpoint = http://localhost:3001/api/categories

Product endpoint = http://localhost:3001/api/products

Tag endpoint = http://localhost:3001/api/tags

2. Test the GET using the above endpoints

3. Test the GET and DELETE by appending the id of the record you are accessing:

http://localhost:3001/api/categories/5

http://localhost:3001/api/products/5

http://localhost:3001/api/tags/5

4. Test the POST by adding a body for example for creating a new product:

{
      "product_name": "Basketball",
      "price": 200.00,
      "stock": 3,
      "tagIds": [1, 2, 3, 4]
}

5. Test the PUT by adding a body for example for changing a product price:

{ 
    "price" : 150.00
}

and appending the product id to the endpoint as shown in #4 above.

## Usage

The ecommerce backend is the backend of an E-commerce site. It shows a working Express.js API, configured to use Sequelize to intereact with a MySQLDatabase. It can be used as a backend for an E-commerce website.

E-commerce is internet retail. 

## Testing
N/A

## Credits
N/A

## License
N/A