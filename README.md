# Node.js Server Boilerplate

A simple and scalable Node.js + Express + MongoDB boilerplate for backend development.

## Features

* Express.js server setup
* MongoDB connection (native driver)
* Environment variables support (.env)
* CORS enabled
* JSON body parsing
* Static file serving
* ES Module (ESM) support

## Tech Stack

* Node.js
* Express.js
* MongoDB
* dotenv
* cors

## Project Structure

```
src/
 ├── server.js
 ├── app.js (optional if separated)
 ├── routes/
 ├── controllers/
 ├── models/
public/
.env
```

## Installation

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
```

## Environment Variables

Create a .env file in the root directory:

```
PORT=4300
URI=your_mongodb_connection_string
MODE=dev
```

## Run Project

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

## API Example

Test Route:

```
GET /mongodb
```

Response:

```json
"mongodb"
```

## Author

Built by nakib uddin

## License

This project is open source and free to use.

## Future Improvements

* Authentication system
* MVC architecture
* Centralized error handling
* Logging system
* Rate limiting
