const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const reminderRoutes = require('./routes/reminders');

const app = express();
app.use(bodyParser.json());
app.use('/api/reminders', reminderRoutes);

mongoose.connect('mongodb://localhost:27017/remindmelater', 

).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB error:", err));

const PORT = process.env.PORT || 4000;
app.use((req, res, next) => {
    res.status(404).send('Route not found');
  });
  
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
