# Mongo Example

A simple Node.js, Express.js, and MongoDB REST API project for managing student data.

## Features

- Connect to MongoDB using Mongoose
- Create Student records
- Fetch all Students
- MVC Folder Structure
- REST API implementation

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

## Project Structure

```
Mongo-Example/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── studentController.js
│
├── Modals/
│   └── studentModal.js
│
├── routes/
│   └── studentRoutes.js
│
├── server.js
├── package.json
└── .gitignore
```

## Installation

1. Clone the repository

```bash
git clone https://github.com/vaibhav-tr98/mongo-example.git
```

2. Navigate to the project folder

```bash
cd mongo-example
```

3. Install dependencies

```bash
npm install
```

4. Start MongoDB locally

```bash
mongod
```

5. Run the server

```bash
node server.js
```

## API Endpoints

### Get All Students

```http
GET /students
```

### Add Student

```http
POST /students
```

Sample Request Body:

```json
{
  "name": "Vaibhav",
  "age": 21,
  "course": "B.Tech"
}
```

## Author

Vaibhav Tripathi

GitHub: https://github.com/vaibhav-tr98
