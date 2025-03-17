# Purpose

The purpose of this app is to implement end to end jsonwebtoken integration in a react application.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the root project directory, you can run:

### `npm run dev`

Runs the both the server and client concurrently in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

Frontend runs on [http://localhost:3000]\
Backend runs on [http://localhost:3001]

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Findings

- By default, Node.js does NOT automatically load .env files. You must install and configure dotenv to read them.
- Install concurrently & nodemon
- Run npm run dev to start both React & Express together
- Handle CORS in the backend OR use proxy in React
- Enable cross port scripting
- The jwt token has been stored in http-only cookies to prevent XSS vulnerablities.

### Future Enhancements

- Implement refresh token to generate a new access-token once the access-token expires.
- Implement password hashing and store in cookies
