const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const hpp = require('hpp');
const helmet = require('helmet');

const rateLimit = require('express-rate-limit');
const bodyParser = require('body-parser');
dotenv.config();
const connectDB = require('./config/db.config');
const routes = require('./routes/index.routes.js');

const app = express();


// Middleware
app.use(helmet());
app.use(hpp());

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);


// Connect to database
connectDB();

// Routes
app.use('/api/v1',routes );

// Start server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
}


);


