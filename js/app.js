/*
    app.js
    Angular application for the address book challenge

    Add code here to create a new Angular application and controller.
    The array of employee objects is already in a global variable named 'pawneeEmployees'
*/
"use strict";

var bookModule = angular.module('AddressBook', []);

// creates controller, referenced in <body> tag
bookModule.controller('AddressController', function($scope) {
    //references employeees.js array
    $scope.employees = pawneeEmployees;

    // order by lastName initially
    $scope.sortCol = 'lastName';

    // sortBy function is necessary to enable buttons, passed sortCol,
    // the variable that determines how the list is sorted
    // sortReverse enables sort desc/asc
    $scope.sortBy = function(sortCol) {
        if ($scope.sortCol == sortCol) {
            $scope.sortReverse = !$scope.sortReverse;
        }
        else {
            $scope.sortCol = sortCol;
            $scope.sortReverse = false;
        }
    };
    $scope.isSortedBy = function(colName) {
        return colName == $scope.sortCol;
    };
});