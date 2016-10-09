var app = angular.module('myapp', []);
var res_data;

app.controller('maincontroller', function($scope,$http){
    $scope.states = state_list;
    $scope.selected = {
        'state': ""
    };
    $scope.res_data;
    $scope.show;
    
    $scope.submitRequest = function(){
        console.log($scope.selected.state+"&sort[city]");
        
        console.log(url_list+$scope.selected.state+"&sort[city]");
                
        /*http request*/
        $http.get(url_list + $scope.selected.state+"&sort[city]")
        .then(function (response){
            res_data = response.data;
            $scope.res_data = response.data;
        
            console.log($scope.res_data);
            
    });
    };
    
    $scope.showDetails = function(id){
        
        console.log(h_details + id);
      
        /*http request*/
        $http.get(h_details + id)
        .then(function (response){
           $scope.h_details = response.data;
        
            console.log($scope.h_details.records);
            
            if(jQuery.isEmptyObject==true){
                $scope.show = false;
                console.log($scope.show);
            }else{
                $scope.show = true;
                console.log($scope.show);
            }
        });
    }
    
});

var state_list = [
   "Andhra Pradesh",
   "Arunachal Pradesh",
   "Assam",
   "Bihar",
   "Chhattisgarh",
   "Chandigarh",
   "Dadra and Nagar Haveli",
   "Daman and Diu",
   "Delhi",
   "Goa",
   "Gujarat",
   "Haryana",
   "Himachal Pradesh",
   "Jammu and Kashmir",
   "Jharkhand",
   "Karnataka",
   "Kerala",
   "Madhya Pradesh",
   "Maharashtra",
   "Manipur",
   "Meghalaya",
   "Mizoram",
   "Nagaland",
   "Orissa",
   "Punjab",
   "Pondicherry",
   "Rajasthan",
   "Sikkim",
   "Tamil Nadu",
   "Tripura",
   "Uttar Pradesh",
   "Uttarakhand",
   "West Bengal"
];

var url_list = "https://data.gov.in/api/datastore/resource.json?resource_id=e16c75b6-7ee6-4ade-8e1f-2cd3043ff4c9&api-key=bacdc4a9814fb08420fda85d2cc0c4bd&filters[state]=";

var h_details = "https://data.gov.in/api/datastore/resource.json?resource_id=e16c75b6-7ee6-4ade-8e1f-2cd3043ff4c9&api-key=bacdc4a9814fb08420fda85d2cc0c4bd&filters[id]=";
