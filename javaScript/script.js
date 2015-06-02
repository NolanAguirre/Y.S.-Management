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
                image:'',
                        },{
                image:'',// floor plan two
                }]
            },{
                catType:'Photos',
                show:showPhotos
            },{
                catType:'Residents',
                show:showResidents                
            },{
                catType:'Apply',
                show:showApply
            },{
                catType:'Contact Us',
                show:showContactUs
            },{
                catType:'About Us',
                show:showAboutUs
            }];
        vm.homeCss = {'display':'block'};
        vm.floorPlansCss ={'display':'none'};
        vm.photosCss ={'display':'none'};
        vm.residentsCss ={'display':'none'};
        vm.applyCss ={'display':'none'};
        vm.appliedCss={'display':'none'};
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
       function showApply(){
            resetDisplay();
            vm.applyCss ={'display':'block'};
        }
        vm.showApplied = function(){
            resetDisplay();
            vm.appliedCss={'display':'block'};
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
        vm.applyCss ={'display':'none'};
        vm.appliedCss={'display':'none'};
        vm.contactUsCss ={'display':'none'};
        vm.aboutUsCss ={'display':'none'};
        }

}
        
        
        
    