angular.module('ysm')
    .controller('HomeController', HomeController);

HomeController.$inject = ['$routeParams']
function HomeController($routeParams) {
    var vm = this;
    vm.slides = [{
        image:'http://placehold.it/150x150/',
        link: '#/about-us',
        text:'View map'
    },{
        image:'http://placehold.it/150x150/',
        link:'#/gallery',
        text:'View more'
    },{
        image:'http://placehold.it/150x150/',
        link:'#/contact-us',
        text:'View contact'
    }]
}
