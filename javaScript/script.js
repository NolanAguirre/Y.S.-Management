angular.module('app',[]).
    controller('myController', apartmentController);
    function apartmentController(){
        var vm = this;
        function slide(type, template){
            this.type = type;
            this.template = template
        }
        function homeSlide(image, title){
            this.image = image;
            this.title = title;
        };
        slide.prototype.isCurrentSlide = function() {
            return this === vm.currentSlide;
        };

        slide.prototype.show = function(){
            vm.currentSlide = this;
        };
        vm.slides = [
            new slide('Home','Html/home.html'),
            new slide('Floor Plan','Html/floorPlan.html'),
            new slide('Gallery',"Html/gallery.html"),
            new slide('Residents', 'Html/residents.html'),
            new slide('Rential Application','Html/rentailApplication.html'),
            new slide('Contact us','Html/contactUs.html'),
            new slide('About us','Html/aboutUs.html')
    ];
        vm.currentSlide = vm.slides[0];
        vm.slides[1].plans = [{
            image:'photos/demoOne.jpg',
            description:'Two Story, Storage unit optional. Two Bedroom,, One and a half Bath',
            sqft:'1127 Sq. Ft.',
            price:'725$ /Monthly'
            },{
            image:'photos/demoTwo.jpg',
            description:'Two Story, Storage unit optional. Two Bedroom,, One and a half Bath',
            sqft:'1327 Sq. Ft.',
            price:'750$ /Monthly'         
        }]
        vm.homeSlides = [
            new homeSlide('demoOne.jpg','View More!'),
            new homeSlide('demoTwo.jpg','Apply Now!'),
            new homeSlide('demoThree.jpg','Learn More!')        
        ]
    }
 