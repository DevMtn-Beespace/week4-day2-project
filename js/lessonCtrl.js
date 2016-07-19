angular.module('directivePractice')
.controller('lessonCtrl', function($scope){
  $scope.test = 'Two-way data binding!';
  $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

  $scope.announceDay = function(lesson, day) {
    if (day) {
      alert(lesson + ' is active on ' + day + '.');
    } else {
      alert('There is no lesson day');
    }
  };

  $scope.lineThrough = function() {
    // alert('line through');
    console.log('line through');

  };

});
