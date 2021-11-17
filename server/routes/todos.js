const express = require('express');
const router = express.Router();

const {
    createTodo,
    updateTodo,
    deleteTodo,
    getAllTodos,
    getSingleTodo,
    getTodayTodos,
} = require('../controllers/todos');

router
    .route('/')
    .post(createTodo)
    .get(getAllTodos);

router
    .route('/today')
    .get(getTodayTodos);

router
    .route('/:id')
    .patch(updateTodo)
    .get(getSingleTodo)
    .delete(deleteTodo);

module.exports = router;