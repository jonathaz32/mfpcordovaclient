var myControllers = angular.module("myControllers", []);

myControllers.controller("commonUIControls", ['$scope', function($scope) {
    
    $scope.busyIndicatorControl = null;
    $scope.busyIndicator = function() {
        if ($scope.busyIndicatorControl == null) {
            $scope.busyIndicatorControl = new WL.BusyIndicator( null, {text : 'Loading...'});
        }
        $scope.busyIndicatorControl.show();
        var cancelTimeoutID = window.setTimeout(function() {
            $scope.busyIndicatorControl.hide();
            window.clearTimeout(cancelTimeoutID);
        }, 5000);
    };

    $scope.showDialog = function() {
        var title = "Dialog";
        var text = "text";
        var buttons = [
            {
                text : 'I am button 1',
                handler : function() { alert("B1 pressed"); }
            }, {
                text : 'I am button 2',
                handler : function() { alert("B2 pressed"); }
            }
        ];
        WL.SimpleDialog.show(title, text, buttons);
    };

    $scope.tabBarInit = function() {
        WL.TabBar.init();
    };

    $scope.tabBarAdd = function() {
        WL.TabBar.addItem("item1",
            function(){
                alert("item 1 pressed");
            },
            "Item 1",{
                image: "tabButton:Search",
            }
        );
    };

}]);

myControllers.controller("translation", ['$scope', function($scope) {
    $scope.logTranslation = function() {
        WL.Logger.debug("Logging...");
        var locale = WL.App.getDeviceLocale();
        var lang = WL.App.getDeviceLanguage();
        WL.Logger.debug(">> Detected locale: " + locale);
        WL.Logger.debug(">> Detected language: " + lang);
    }
}]);