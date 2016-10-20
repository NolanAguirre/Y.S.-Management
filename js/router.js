angular.module('ysm')
    .config(Router);

Router.$inject = ['$routeProvider'];
function Router($routeProvider) {
    $routeProvider
<<<<<<< HEAD
        .when('/', {templateUrl: 'templates/home.html'})
=======
        .when('/', {
            controller: 'HomeController as vm',
            templateUrl:'templates/home.html'
        })
>>>>>>> origin/master
        .when('/gallery', {templateUrl: 'templates/gallery.html'})
        .when('/about-us', {templateUrl: 'templates/about-us.html'})
        .when('/contact-us', { templateUrl: 'templates/contact-us.html'})
        .otherwise({redirectTo: '/'});
}
