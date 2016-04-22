var ionicApp = angular.module("ionicapp", [
   'ionic', 'myControllers'
]);

ionicApp.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('commonUIControls', {
                url: '/commonUIControls',
                templateUrl: 'templates/commonUIControls.html',
                controller: 'commonUIControls'
            })
            .state('translation', {
                url: '/translation',
                templateUrl: 'templates/translation.html',
                controller:'translation'
            });
        $urlRouterProvider.otherwise('/commonUIControls');



    }
]);

ionicApp.run(function($rootScope, $location) {
    $rootScope.changeLocation = function(locationPage) {
        $location.path(locationPage);
    };
    $rootScope.Messages = {
        headerText: "Default header",
        actionsLabel: "Default action label",
        sampleText: "Default sample text",
        englishLanguage : "English",
        frenchLanguage : "French",
        russianLanguage : "Russian",
        hebrewLanguage : "Hebrew"
    };
    $rootScope.setEnglish = function() {
        $rootScope.Messages.headerText = "Default header";
        $rootScope.Messages.actionsLabel = "Default action label";
        $rootScope.Messages.sampleText = "Default sample text";
    };
    $rootScope.setFrench = function() {
        $rootScope.Messages.headerText = "Tête par défaut";
        $rootScope.Messages.actionsLabel = "étiquette d'action par défaut";
        $rootScope.Messages.sampleText = "Exemple de texte par défaut";
    };
    $rootScope.setRussian = function() {
        $rootScope.Messages.headerText = "заголовок по умолчанию";
        $rootScope.Messages.actionsLabel = "метка действия по умолчанию";
        $rootScope.Messages.sampleText = "По умолчанию текст образца";
    };
    $rootScope.setHebrew = function() {
        $rootScope.Messages.headerText = "По умолчанию заголовок";
        $rootScope.Messages.actionsLabel = "Действие по умолчанию метка";
        $rootScope.Messages.sampleText = "По умолчанию текст образца";
    };
    $rootScope.dummyFunction = function() {
        alert("dummy");
    };
    // comment for Jonny
    // comment for Jonny
});

/*
ionicApp.controller("commonUIControls", ['$scope', function($scope) {
    $scope.busyIndicator = function() {
        alert("jon");
    };
}]);
*/
