# Muncho CMS Backend

This is a Node.js Express backend for a website builder. It allows uploading and retrieving data from MongoDB for preview purposes.

## Features
- Upload data to MongoDB
- Retrieve data for preview
- Express route, middleware, and schema setup

## Setup
1. Install dependencies:
   ```sh
   npm install
   ```
2. Set up MongoDB and configure `.env` (see example in this repo).
3. Start the server:
   ```sh
   node index.js
   ```

## API Endpoints
- `POST /api/data` — Upload data (expects `{ title, content }` in JSON body)
- `GET /api/data` — Retrieve all data
