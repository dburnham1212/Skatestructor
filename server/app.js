require('dotenv').config();

const { ENVIRONMENT, PORT } = process.env;

const express = require('express');
const morgan = require('morgan')
const cors = require('cors');
const cookieSession = require('cookie-session');

const userRoutes = require('./routes/usersRoutes');
const authRoutes = require('./routes/authRoutes');
const trickRoutes = require('./routes/trickRoutes')
const trickInstructionRoutes = require('./routes/trickInstructionRoutes')
const challengeRoutes = require('./routes/challengeRoutes')

const app = express();
app.use(morgan(ENVIRONMENT));
app.use(cors());
app.use(express.json());

// MIDDLEWARE
app.use(cookieSession({
  name: 'session',
  keys: ['Key1', 'Key2', 'Key3'],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/tricks', trickRoutes);
app.use('/trickInstruction', trickInstructionRoutes);
app.use('/challenge', challengeRoutes);

app.listen(PORT, (error) => {
  if(!error){
    console.log("Server is Successfully Running, and App is listening on port " + PORT)
  }
  else {
    console.log("Error occurred, server can't start", error);
  }
})