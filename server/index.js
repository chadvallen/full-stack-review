const express= require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} 🦍`)
})