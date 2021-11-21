require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./db/connect');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/auth');
const dataRouter = require('./routes/data');
const todosRouter = require('./routes/todos');
const notFound = require('./middleware/not-found');
const authenticateUser = require('./middleware/auth');
const errorHandler = require('./middleware/error-handler');

// middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser(process.env.JWT_SECRET));
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/data', dataRouter);
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