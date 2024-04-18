# Node.js Backend with Express

 #### Dependencies

1. **dotenv**:
This package loads environment variables from a `.env` file into `process.env`. It's commonly used to manage environment-specific configuration, such as database credentials, API keys, and other sensitive information, without hardcoding them into your codebase.

ref: https://www.npmjs.com/package/dotenv

   - It's required at the top of your main file (`app.js` or `index.js`) to load environment variables from the `.env` file.
   - It's used to configure environment variables like `PORT` and `JWT_SECRET`.
   - Example: `require("dotenv").config();`



2. **express**:
Express.js is a popular web framework for Node.js. It simplifies the process of building web applications and APIs by providing a robust set of features for routing, middleware, and handling HTTP requests and responses.

ref: https://www.npmjs.com/package/express

   - It's required at the top of your main file to import the Express.js framework.
   - It's used to create an instance of the Express application.
   - Example: `const express = require("express");`



3. **bcryptjs**:
Bcrypt.js is a library used for hashing passwords securely. It employs a one-way hashing algorithm with salt to protect user passwords stored in databases. This package helps in ensuring that user passwords are not stored in plaintext, enhancing security.

ref: https://www.npmjs.com/package/bcryptjs

   - It's required at the top of your main file to import the bcrypt.js library.
   - It's used for hashing passwords securely.
   - Example: `const bcrypt = require("bcryptjs");`

4. **jsonwebtoken**:
This package is used for generating and verifying JSON Web Tokens (JWT). JWT is a compact, URL-safe means of representing claims between two parties. It's commonly used for authentication and session management in web applications.

ref: https://www.npmjs.com/package/jsonwebtoken

   - It's required at the top of your main file to import the jsonwebtoken library.
   - It's used for generating and verifying JWT tokens.
   - Example: `const jwt_token = require("jsonwebtoken");`

5. **axios**:
Axios is a promise-based HTTP client for the browser and Node.js. It simplifies making HTTP requests from your application, supporting features like request and response interception, error handling, and more. It's often used for interacting with external APIs.

ref: https://www.npmjs.com/package/axios

   - It's required at the top of your main file to import the axios library.
   - It's used for making HTTP requests to external APIs.
   - Example: `const axios = require("axios");`

6. **cheerio**:
 Cheerio is a fast, flexible, and lean implementation of core jQuery designed specifically for the server-side. It provides a jQuery-like API for parsing and manipulating HTML documents, making it useful for web scraping and DOM manipulation in Node.js applications.
 
ref: https://www.npmjs.com/package/cheerio
 
   - It's required at the top of your main file to import the cheerio library.
   - It's used for parsing and manipulating HTML documents (usually used for web scraping).
   - Example: `const cheerio = require("cheerio");`



These packages collectively provide essential functionality for building a robust and secure backend application in Node.js. They help in managing environment variables, handling HTTP requests and responses, securing passwords, implementing authentication mechanisms, interacting with external APIs, and parsing HTML documents.



### GitHub User Data Retrieval

The `/user-github/:username` endpoint retrieves data of a GitHub user by their username. It utilizes the GitHub API to fetch user information and renders it in an HTML template.

- **axios**: Axios is used for making HTTP requests to external APIs. In this case, it's used to fetch data from the GitHub API.

- **cheerio**: Cheerio is used for parsing and manipulating HTML documents. It's used here to render fetched GitHub user data in an HTML template.
#### Endpoints
- **GET /user-github/:username**: Retrieves GitHub user data by username.



### Folder Structure:
#### (without `src` Directory)

```
project-root/
│
├── controllers/
│   ├── authController.js
│   ├── userController.js
│   └── ...
│
├── models/
│   ├── user.js
│   ├── post.js
│   └── ...
│
├── routes/
│   ├── authRoutes.js
│   ├── userRoutes.js
│   └── ...
│
├── middleware/
│   ├── authMiddleware.js
│   ├── errorMiddleware.js
│   └── ...
│
├── app.js
│
├── node_modules/
│
├── .env
├── package.json
├── README.md
└── ...
```

In this structure:
- The main source files such as controllers, models, routes, middleware, etc., are directly under the project root directory.
- `app.js` (or `index.js`) is still the entry point of the application.
- `node_modules/`, `.env`, `package.json`, `README.md`, and other configuration files remain in the project root directory.
