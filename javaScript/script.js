angular.module('app',[]).
    controller('myController', apartmentController);
    function apartmentController(){
        var vm = this;
        vm.cats = [
            { // categories 
            catType:'Home',
            show:showHome
            },{
            catType:'Floor Plans',
            show:showFloorPlans,
            floorTypes:[{
                image: 'photos/demoOne.jpg',
                css:{'height':'50%'}
                        },{
                image:'photos/demoTwo.jpg',
                css:{'height':'50%'}// floor plan two
                }]
            },{
                catType:'Photos',
                show:showPhotos
            },{
                catType:'Residents',
                show:showResidents                
            },{
                catType:'Rental Application',
                show:showRentalApp
            },{
                catType:'Contact Us',
                show:showContactUs
            },{
                catType:'About Us',
                show:showAboutUs
            }];
        vm.floorPlan = vm.cats[1];
        vm.homeCss = {'display':'block'};
        vm.floorPlansCss ={'display':'none'};
        vm.photosCss ={'display':'none'};
        vm.residentsCss ={'display':'none'};
        vm.rentalAppCss ={'display':'none'};
        vm.contactUsCss ={'display':'none'};
        vm.aboutUsCss ={'display':'none'};
        function showHome(){
            resetDisplay();
            vm.homeCss = {'display':'block'};
        }
        function showFloorPlans(){
            resetDisplay();
            vm.floorPlansCss ={'display':'block'};
        }
        function showPhotos(){
            resetDisplay();
            vm.photosCss ={'display':'block'};
        }
        function showResidents(){
            resetDisplay();
            vm.residentsCss ={'display':'block'};
        }
       function showRentalApp(){
            resetDisplay();
            vm.rentalAppCss ={'display':'block'};
        }
        function showContactUs(){
            resetDisplay();
            vm.contactUsCss ={'display':'block'};
        }
        function showAboutUs(){
            resetDisplay();
            vm.aboutUsCss ={'display':'block'};
        }
        function resetDisplay(){
        vm.homeCss = {'display':'none'};
        vm.floorPlansCss ={'display':'none'};
        vm.photosCss ={'display':'none'};
        vm.residentsCss ={'display':'none'};
        vm.rentalAppCss ={'display':'none'};
        vm.contactUsCss ={'display':'none'};
        vm.aboutUsCss ={'display':'none'};
        }
    }
 