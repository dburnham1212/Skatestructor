require('dotenv').config();

const { ENVIRONMENT, PORT } = process.env;

const express = require('express');
const morgan = require('morgan')
const cors = require('cors');

const userRoutes = require('./routes/usersRoutes');

const app = express();
app.use(morgan(ENVIRONMENT));
app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);

app.listen(PORT, (error) => {
  if(!error){
    console.log("Server is Successfully Running, and App is listening on port " + PORT)
  }
  else {
    console.log("Error occurred, server can't start", error);
  }
})