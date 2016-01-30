var app = angular.module('datepicker' , []);
app.directive('persianDatepicker'  , function(){
    return {
        link: function(scope, element, attrs){
        },
        scope:{
            format: '=',
            serverFormat: '=',
            inputname: '='
        },
        controller: function($scope){
            var generateOutput = function(date){
                if($scope.timestamp){
                    return date.unix();
                }else{
                    return date.utc();
                }
            }
            $scope.inputName = $scope.inputName || 'datetime';
            var init = function(){
                date = new persianDate();
                console.log(date.format($scope.format));
                $scope.datetime = date.format($scope.format);
                $scope.hiddenDateTime = date.utc();
                console.log($scope.hiddenDateTime);
            }
            init();
            console.log('controller loaded');
            $scope.$watch('datetime' , function(newval){
                console.log(newval);
            });
        },
        template:'\
            <input ng-model="hiddenDateTime" name="{{inputname}}" type="text" />\
            <input class="form-control" ng-model="datetime" type="text" />\
        ',
    };
});
