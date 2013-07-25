var indexRoutes = require('../routes/index.js');

exports.testAddTodo = function(test) {
  var todos = [
    { due : new Date().toString(),
      done : true,
      description : 'Learn AngularJS'
    }
  ];
  var fn = indexRoutes.addTodo(todos);

  var d = new Date();
  var req = {
    body : {
      due : d.toString(),
      done : false,
      description : 'Learn TDD'
    }
  };

  var res = {
    json : function(obj) {
      test.equals(todos, obj.todos);
      test.equals(2, todos.length);

      test.equals(req.body.description, todos[1].description);
      test.equals(d.toString(), todos[1].due);
      test.ok(!todos[1].done);

      // test.expect means 'expect 5 tests will be run'
      test.expect(5);
      test.done();
    }
  };

  fn(req, res);
};