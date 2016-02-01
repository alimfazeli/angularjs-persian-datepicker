var app = angular.module('angular-persian-datepicker' , []);
var persianDatepickerController = function($scope){
    var generateOutput = function(date){
        if($scope.timestamp){
            return date.unix();
        }else{
            return date.utc();
        }
    }
    $scope.inputName = $scope.inputName || 'datetime';
    var init = function(){
        //init needed variables
        $scope.showCalendar = false;

        date = new persianDate();
        $scope.datetime = date.format($scope.format);
        $scope.hiddenDateTime = date.utc();
        console.log($scope.hiddenDateTime);
    }
    init();
    console.log('controller loaded');
    $scope.$watch('datetime' , function(newval){

        if(typeof newval != 'undefined'){

            // $scope.hiddenDateTime = generateOutput(newval);

        }
    });
}
app.directive('dateSelector' , function(){
    return {
        link : function(){
        },
        templateUrl : 'date-selector.html',
    }
});
app.directive('persianDatepicker'  , function(){
    return {
        link: function(scope, element, attrs){
        },
        scope:{
            format: '@',
            serverFormat: '=',
            inputname: '@'
        },
        controller: persianDatepickerController,
        // template:'\
        //     <input ng-model="hiddenDateTime" name="{{inputname}}" type="text" />\
        //     <input class="form-control" ng-model="datetime" type="text" />\
        // ',
        template: '\
        <div class="input-group date">\
                <input ng-model="hiddenDateTime" name="{{inputname}}" type="hidden" />\
            <input readonly ng-focus="showCalendar = true" ng-blur="showCalendar = false" class="form-control" ng-model="datetime" type="text" />\
            <div class="input-group-addon">\
                <span class="glyphicon glyphicon-th"></span>\
            </div>\
            <date-selector></date-selector>\
        </div>\
        <!--{{hiddenDateTime}}<br/>\
        show calendar: {{showCalendar}}<br/>-->\
        '
    };
});
