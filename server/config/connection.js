const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://stanlou09:0YKgSUnj3lSIveMw@bootcamp.mq1yue5.mongodb.net/googlebooks');

module.exports = mongoose.connection;

// require('dotenv').config();
// const { connect, connection } = require('mongoose');
// const connectionString = process.env.MONGODB_URI;
// connect(connectionString);
// module.exports = connection;