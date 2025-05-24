# Remind Me Later ⏰

A simple Express.js + MongoDB API for scheduling reminders via SMS or Email. Built as part of an internship screening task.

---

## 🚀 Features

- Create a reminder with date, time, message, and delivery type
- RESTful POST API endpoint
- MongoDB-backed data storage
- Clean, modular project structure

---

## 📦 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Tools**: Thunder Client / Postman for testing

---

## 📌 API Endpoint

### `POST /api/reminders`

#### Request Body:

```json
{
  "date": "2025-05-25",
  "time": "18:30",
  "message": "Submit assignment",
  "reminder_type": "EMAIL"
}
