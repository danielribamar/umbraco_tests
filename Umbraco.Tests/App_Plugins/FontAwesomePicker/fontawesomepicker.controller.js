angular.module("umbraco")
    .controller("Custom.FontawesomePicker",
    function ($scope, assetsService, dialogService) {
        console.log($scope.model.value);
        assetsService
            .load([
            ])
            .then(function () {
                console.log("::fontawesome picker:: dependencies loaded");
            });
        $.getJSON('../App_Plugins/FontAwesomePicker/data/icons.json', function (json) {
            console.log('loading icons');
            $scope.icons = json;
        });
    });