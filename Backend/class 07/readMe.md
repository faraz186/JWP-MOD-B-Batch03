# Blog Post Creation
This project provides a simple authentication system built with Node.js, Express, and MongoDB.


#### Features
```markdown
- User signup: Allows users to create an account by providing basic information.
- User login: Users can log in with their email and password to access protected resources.
- Check authentication status: Verifies if the user is authenticated using JSON Web Tokens (JWT).
```
## Installation

```
1. Clone the repository:

```
git clone https://github.com/JawanTechPk/mern-module-b-09-saims-classes.git

```
2. Install dependencies:

```
npm install

```
3. Set up environment variables:

Create a `.env` file in the root directory and add the following variables:

```
PORT=5000
JWT_SCRET_KEY=@12345
MONGODB_DATABASE_URI=mongodb://127.0.0.1:27017/test-database


```
4. Start the server:
```

npm start


```
## API Endpoints

### Signup

- **Endpoint**: `POST /signup`
- **Request Body**:
  ```json
  {
    "username": "example_user",
    "email": "example@example.com",
    "password": "password123"
  }
  ```

### Login

- **Endpoint**: `POST /login`
- **Request Body**:
  ```json
  {
    "email": "example@example.com",
    "password": "password123"
  }
  ```

### Check Authentication

- **Endpoint**: `GET /check-auth`

## cookies-parser

This project utilizes the `cookie-parser` middleware, a popular Express middleware, to handle cookies in the incoming request headers. Cookies are small pieces of data stored in the client's browser that are sent with each request to the server. 

`cookie-parser` parses these cookies and makes them available in the `req.cookies` object in the Express request object. It simplifies the process of setting, reading, and modifying cookies in the application.

In this authentication system, `cookie-parser` is used for handling authentication tokens. After a successful login, a JSON Web Token (JWT) is generated and set as a cookie in the client's browser. Subsequent requests from the client include this token in the cookie header, allowing the server to verify the user's authentication status.

By using `cookie-parser`, managing authentication tokens becomes more convenient and secure, enhancing the overall user experience and security of the application.


# Updates 

## Middleware

Middleware functions in Node.js/Express are essential components that intercept incoming HTTP requests and provide a way to execute code before it reaches the route handlers. Middleware can perform tasks such as authentication, authorization, request logging, error handling, and more.

### 1. Authentication Middleware

#### Purpose:
- Verifies the authenticity of incoming requests.
- Retrieves user details based on the provided authentication token.
- Sets the authenticated user details in the request object for further processing.

#### Implementation:
- File: `middlewares/check_auth_middleware.js`
- Middleware function: `check_auth_middleware`
- Usage: Applied to routes that require authentication.
- Flow:
  1. Extracts the authentication token from request cookies.
  2. Verifies the token using the JWT_SECRET_KEY.
  3. Fetches user details from the database based on the token's payload.
  4. Sets user details in the request object.
  5. Passes control to the next middleware or route handler.


#### Purpose:
- Implements access control rules.
- Restricts access to certain routes or resources based on user permissions.


4. **Use Middleware in Routes/Controllers**: Import the middleware in your route or controller files and use it where necessary. For example:
   ```javascript
   // Import middleware
   const { check_auth_middleware } = require("./middlewares/check_auth_middleware");

   // Example route requiring authentication
   router.get("/protected-route", check_auth_middleware, (req, res) => {
     // Access authenticated user's details from req object
     const user = req.user;
     res.json({ success: true, user: user });
   });
   ```

## Environment Variables

This project uses environment variables for configuration. You need to set up these variables before running the project. Follow the steps below to set up the environment variables:

1. Create a copy of the `.env.example` file and name it `.env`:
   ```bash
   cp .env.example .env
   ```

2. Open the `.env` file in a text editor.

3. Set the values for the environment variables according to your configuration. 

## Running the Project

Once you have set up the environment variables, you can run the project locally. Use the following command:

```bash
npm start
```
