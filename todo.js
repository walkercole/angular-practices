var app = angular.module('myApp',[]);
    app.controller('todoController', ['$scope', function($scope) {
    $scope.todos = [
        {'title':'Build ToDo App','done':false}
    ];

    $scope.addTodo = function(){
        $scope.todos.push({'title':$scope.newTodo,'done':false})
        $scope.newTodo = ''
    }
    $scope.clearCompleted = function(){
        $scope.todos = $scope.todos.filter(function(item){
            return !item.done
        })
    }
    }]);
    app.controller('InlineEditorController', ['$scope', function($scope) {
        $scope.showtooltip = false;
        $scope.value = 'Edit Me.';

        $scope.hideTooltip = function(){
            $scope.showtooltip = false;
        }

        $scope.toggleTooltip = function(e){
            e.stopPropagation();
            $scope.showtooltip = !$scope.showtooltip;
        }
    }]);
    app.controller('OrderFormController', ['$scope', function($scope){
        $scope.services = [
            {            name: 'Web Development',
                price: 300,
                active:true
            },{
                name: 'Design',
                price: 400,
                active:false
            },{
                name: 'Integration',
                price: 250,
                active:false
            },{
                name: 'Training',
                price: 220,
                active:false
            }
        ];
        $scope.toggleActive = function(s){
            s.active = !s.active;
        }
        $scope.total = function(){
            var total = 0;
            angular.forEach($scope.services, function(s){
                if (s.active){
                    total += s.price;
                }
            });
            return total;
        };
    }]);