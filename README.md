# Node.js Server Boilerplate

A clean, modular, and scalable **Node.js + Express + MongoDB** boilerplate for backend development — ready to clone and build on.

---

## Features

- Express.js server with modular route handling
- MongoDB connection via native driver (optional — server runs without it)
- Environment variable support via `.env`
- CORS enabled with configurable origin
- JSON body parsing with payload limit
- Static file serving from `public/`
- Separated middleware, routes, and DB config
- ES Module (ESM) support throughout

---

## Tech Stack

| Package    | Purpose                  |
|------------|--------------------------|
| Node.js    | Runtime                  |
| Express.js | Web framework            |
| MongoDB    | Database (native driver) |
| dotenv     | Environment variables    |
| cors       | Cross-origin requests    |

---

## Project Structure

```
├── public/                  # Static files
├── src/
│   ├── Routs/
│   │   └── test.js          # Example route
│   ├── app.js               # App entry (Vercel)
│   ├── db.js                # MongoDB connection
│   ├── middleware.js        # All middlewares
│   └── server.js            # Server entry (dev)
├── .env                     # Environment variables
├── .gitignore
├── package.json
├── vercel.json              # Vercel deployment config
└── README.md
```

---

## Installation

```bash
git clone https://github.com/nakib360/Node-Server.git your-folder-name
cd your-folder-name
npm install
```

---

## Environment Variables

Create a `.env` file in the root directory:

```env
URI=your_mongodb_connection_string
```

> Note: MongoDB connection is **optional** — the server will run without a URI, but DB features will be unavailable.

---

## Run Project

**Development mode:**

```bash
npm run dev
```

---

## API Reference

### Test Route

```
GET /test
```

**Response:**

```json
"the node server boilerplate is ready."
```

---

## Deployment

This boilerplate is configured for **Vercel** out of the box via `vercel.json`.

```bash
vercel deploy
```

---

## Roadmap

- [ ] Authentication system (JWT)
- [ ] MVC architecture
- [ ] Centralized error handling
- [ ] Request logging (Morgan / Winston)
- [ ] Rate limiting
- [ ] Input validation (Zod / Joi)

---

## Author

Built by [nakib360](https://github.com/nakib360)

---

## License

This project is open source and free to use under the [MIT License](LICENSE).