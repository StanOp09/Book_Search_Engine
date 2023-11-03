const password = 'Stanop09#';
const encodedPassword = encodeURIComponent(password);
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://stanlou09:${encodedPassword}@bootcamp.mq1yue5.mongodb.net/?retryWrites=true&w=majority/googlebooks');

module.exports = mongoose.connection;


// const password = 'Stanop09#';
// const encodedPassword = encodeURIComponent(password);
// require('dotenv').config();
// const { connect, connection } = require('mongoose');
// const connectionString = process.env.MONGODB_URI;
// connect(connectionString);
// module.exports = connection;