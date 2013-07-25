
/*
 * GET home page.
 */

exports.index = function(Todo) {
  return function(req, res) {
    Todo.find({}, function(error, todos) {
      res.render('index', {
        title: 'Express',
        todos : todos
      });
    });
  };
};

exports.addTodo = function(Todo) {
  return function(req, res) {
    var todo = new Todo(req.body);
    todo.save(function(error, todo) {
      if (error || !todo) {
        res.json({ error : error });
      } else {
        res.json({ todo : todo });
      }
    });
  };
};