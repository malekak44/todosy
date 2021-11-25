const Errors = require('../errors');
const Todo = require('../models/Todo');
const { StatusCodes } = require('http-status-codes');

const createTodo = async (req, res) => {
    req.body.user = req.user.userId;
    const todo = await Todo.create(req.body);
    res.status(StatusCodes.CREATED).json({ todo });
}

const updateTodo = async (req, res) => {
    const { id: todoId } = req.params;

    const todo = await Todo.findOneAndUpdate({ _id: todoId }, req.body, {
        new: true,
        runValidators: true,
    });

    if (!todo) {
        throw new Errors.NotFoundError(`No todo found with id: ${todoId}`);
    }

    res.status(StatusCodes.OK).json({ todo });
}

const deleteTodo = async (req, res) => {
    const { id: todoId } = req.params;

    const todo = await Todo.findOneAndDelete({ _id: todoId });

    if (!todo) {
        throw new Errors.NotFoundError(`No todo found with id: ${todoId}`);
    }

    res.status(StatusCodes.OK).json({ msg: 'todo deleted successfully' });
}

const deleteCompleted = async (req, res) => {
    await Todo.deleteMany({ completed: true });
    res
        .status(StatusCodes.OK)
        .json({ msg: 'completed todos deleted successfully' });
}

const getAllTodos = async (req, res) => {
    const todos = await Todo.find({ user: req.user.userId });
    res.status(StatusCodes.OK).json({ todos, count: todos.length });
}

const getSingleTodo = async (req, res) => {
    const { id: todoId } = req.params;

    const todo = await Todo.findOne({ _id: todoId });

    if (!todo) {
        throw new Errors.NotFoundError(`No todo found with id: ${todoId}`);
    }

    res.status(StatusCodes.OK).json({ todo });
}

const getTodayTodos = async (req, res) => {
    let todos = await Todo.find({ user: req.user.userId });

    const today = new Date().getDate();

    todos = todos.filter(todo => todo.deadline.getDate() === today);

    res.status(StatusCodes.OK).json({ todos, count: todos.length });
}


module.exports = {
    createTodo,
    updateTodo,
    deleteTodo,
    getAllTodos,
    getSingleTodo,
    getTodayTodos,
    deleteCompleted,
}