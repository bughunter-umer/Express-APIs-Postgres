const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const User = require('./models/user');
sequelize.sync({ alter: true }); // will update table with new column


const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/users', require('./routes/userRoutes'));


// Test Route
app.get('/', (req, res) => {
  res.send('Express + Sequelize + PostgreSQL working!');
});

// Sync database and start server
sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
  });
}).catch((err) => {
  console.error('Unable to connect to database:', err);
});