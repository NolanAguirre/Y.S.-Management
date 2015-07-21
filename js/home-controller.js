angular.module('ysm')
    .controller('HomeController', HomeController);

ResidenceController.$inject = ['$routeParams'];
function HomeController($routeParams) {
    var vm = this;
    vm.hi = 'hi';
    vm.letter = $routeParams.letter;
}
