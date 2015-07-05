angular.module('ysm')
    .controller('ResidenceController', ResidenceController);

ResidenceController.$inject = ['$routeParams'];
function ResidenceController($routeParams) {
    var vm = this;

    vm.letter = $routeParams.letter;
}
