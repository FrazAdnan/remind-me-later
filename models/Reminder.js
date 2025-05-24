const mongoose = require('mongoose');

const ReminderSchema = new mongoose.Schema({
  date: { type: String, required: true },
  time: { type: String, required: true },
  message: { type: String, required: true },
  reminder_type: {
    type: String,
    enum: ['SMS', 'EMAIL'],
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model('Reminder', ReminderSchema);
