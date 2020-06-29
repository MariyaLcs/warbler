# Warbler Server

This is the server for Warbler client. This app was built using Express web application framework. Warbler server handles all user
authentication and CRUD operations related to users and messages. User and message data are stored in a MongoDB database which is
hosted on [mLab](https://mlab.com/). The project is based on the idea of Twitter. Its purpose is to share messages with other users. Main functionality, sign up page, viewing all users' messages, add a new message, remove message.

This app was built using following javascript libraries and frameworks.

- [Express](https://expressjs.com/) - This is used as the server framework.
- [Mongoose](https://mongoosejs.com/) - This library is used for MongoDB object modeling.
- [cors](https://www.npmjs.com/package/cors) - This library is used to enable CORS(Cross-origin resource sharing).
- [body-parser](https://www.npmjs.com/package/body-parser) - This library is used to parse incoming request bodies.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - This library is used to help with authentication.
- [dotenv](https://www.npmjs.com/package/dotenv) - This library is used to load environment variables from a .env file.
- [bcrypt](https://www.npmjs.com/package/bcrypt) - This library is used to hash passwords. \*Changed for bcryptjs

npm install -y

npm install express body-parser mongoose jsonwebtoken cors bcryptjs dotenv httpie

Test
node index.js
http POST localhost:8081/api/auth/signup

http POST localhost:8081/api/auth/signup username=rico6 password=rico6 email=rico6
http POST localhost:8081/api/auth/signin username=rico6 password=rico6 email=rico6

http POST localhost:8081/api/users/5ef9ee7228a7484050a213d7/messages text=HOHOHO
http GET localhost:8081/api/users/5ef9ee7228a7484050a213d7/messages
