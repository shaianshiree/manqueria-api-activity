const dns = require('node:dns').promises;
dns.setServers(['1.1.1.1', '8.8.8.8']);

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);

        // Fixed: changed to backticks and fixed spelling of "connection"
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        // Fixed: changed to backticks to see the ACTUAL error
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;