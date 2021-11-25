require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const cors = require('cors');
const xss = require('xss-clean');
const helmet = require('helmet');
const rateLimiter = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const connectDB = require('./db/connect');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/auth');
const quoteRouter = require('./routes/quote');
const todosRouter = require('./routes/todos');
const notFound = require('./middleware/not-found');
const authenticateUser = require('./middleware/auth');
const errorHandler = require('./middleware/error-handler');

// middleware
app.set('trust proxy', 1);
app.use(
    rateLimiter({
        windowMs: 15 * 60 * 1000,
        max: 100,
    })
);
app.use(xss());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(helmet());
app.use(mongoSanitize());
app.use(cookieParser(process.env.JWT_SECRET));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/quote', quoteRouter);
app.use('/api/v1/todos', authenticateUser, todosRouter);
app.use(errorHandler);
app.use(notFound);

const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();