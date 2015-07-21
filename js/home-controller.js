angular.module('ysm')
    .controller('HomeController', HomeController);

ResidenceController.$inject = ['$routeParams'];
function HomeController($routeParams) {
    var vm = this;
    vm.slides = [{
        image:'http://placehold.it/200x200/'
    },{
        image:'http://placehold.it/200x200/'
    },{
        image:'http://placehold.it/200x200/'
    }]
}
