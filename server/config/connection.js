const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://stanlou09:0YKgSUnj3lSIveMw@bootcamp.mq1yue5.mongodb.net/googlebooks');

module.exports = mongoose.connection;
