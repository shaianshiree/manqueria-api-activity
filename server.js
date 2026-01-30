require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;
const BASE_URI = process.env.BASE_URI || '/api/v1';


app.get(BASE_URI, (req, res) => {
    res.json({ message: "Welcome to the ManqueriaP API! The server is running." });
});


const apiRoutes = require('./src/routes/apiRoutes');
app.use(BASE_URI, apiRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Base URI: http://localhost:${PORT}${BASE_URI}`);
});