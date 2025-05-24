const express = require('express');
const router = express.Router();
const Reminder = require('../models/Reminder');

// POST /api/reminders
router.post('/', async (req, res) => {
    console.log("POST /api/reminders called");

  const { date, time, message, reminder_type } = req.body;

  if (!date || !time || !message || !reminder_type) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newReminder = new Reminder({ date, time, message, reminder_type });
    await newReminder.save();
    res.status(201).json({ message: 'Reminder saved successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
