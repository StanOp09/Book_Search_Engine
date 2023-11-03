// const mongoose = require('mongoose');
// require('dotenv').config();

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks');

// module.exports = mongoose.connection;


const password = 'Stanop09#';
const encodedPassword = encodeURIComponent(password);
require('dotenv').config();
const { connect, connection } = require('mongoose');
const connectionString = process.env.MONGODB_URI;
connect(connectionString);
module.exports = connection;