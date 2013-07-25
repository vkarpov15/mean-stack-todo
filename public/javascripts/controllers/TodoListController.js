function TodoListController($scope, $http) {
  $scope.todos = [];
  $scope.newTodo = {
    done : false,
    due : new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
    description : ''
  };

  $scope.doneFilter = { done : true };
  $scope.notDoneFilter = { done : false };

  $scope.setTodos = function(todos) {
    $scope.todos = todos;
  };

  $scope.addNewTodo = function() {
    $http.post('/todo.json', $scope.newTodo).success(function(data) {
      $scope.todos = data.todos;
      $scope.newTodo.description = '';
    });
  };
}