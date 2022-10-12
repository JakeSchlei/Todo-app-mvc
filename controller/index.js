const router = require('express').Router();
const todos = require('../seed/todos');

router.get('/todos', (req, res) => {
    res.render('todos', {
        firstName: 'Jake',
        powerLevel: 9001,
        todos,
    });
});

router.get('/todos/:index', (req, res) => {
    res.render('todo_profile', {
        title: todos[req.params.index].todo,
        shouldShowH1: todos[req.params.index].completed
    });
});

// rendering the profile

router.get('/users', (req, res) => {
    res.render('user_profile', {
        title: 'Jake Schlei',
        shouldShowH1: true
    });
})

module.exports = router;