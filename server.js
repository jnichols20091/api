const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');
const dbConnection = require('./database/connection');

dotEnv.config();

const app = express();

dbConnection();

app.use(cors());

// request payload middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1/product', require('./routes/productRoutes'));


app.get('/', (req, res, next) => {
    res.send('hello from node server');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`); 
});

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send({
        status: 500,
        message: err.message,
        body: {}
    });
});