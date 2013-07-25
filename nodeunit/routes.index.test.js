var indexRoutes = require('../routes/index.js');

exports.testAddTodo = function(test) {
  var d = new Date();
  var req = {
    body : {
      due : d.toString(),
      done : false,
      description : 'Learn TDD'
    }
  };

  var Todo = function(obj) {
    this.data = obj;
    this.save = function(callback) {
      test.equals(obj, req.body);
      callback(null, this);
    };
  };
  var fn = indexRoutes.addTodo(Todo);

  var res = {
    json : function(obj) {
      test.equals(req.body, obj.todo.data);

      // test.expect(2) means 'expect 2 tests will be run'
      test.expect(2);
      test.done();
    }
  };

  fn(req, res);
};