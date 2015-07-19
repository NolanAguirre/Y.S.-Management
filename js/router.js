angular.module('ysm')
    .config(Router);

Router.$inject = ['$routeProvider'];
function Router($routeProvider) {
    $routeProvider
        .when('/', {templateUrl: 'templates/home.html'})
        .when('/gallery', {templateUrl: 'templates/gallery.html'})
        .when('/about-us', {templateUrl: 'templates/about-us.html'})
        .when('/contact-us', { templateUrl: 'templates/contact-us.html'})
        .otherwise({redirectTo: '/'});
}
