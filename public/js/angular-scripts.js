var app=angular.module('single-page-app',['ngRoute']);
app.config(function($routeProvider){
      $routeProvider
          .when('/',{
                templateUrl: 'home.html'
          })
          .when('/about',{
                templateUrl: 'about.html'
          })
          .when('/',{
            templateUrl: 'service.html'
      })
      .when('/about',{
            templateUrl: 'offer.html'
      })
      .when('/',{
        templateUrl: 'terminal.html'
  })
  .when('/about',{
        templateUrl: 'contact.html'
  })
  .when('/',{
    templateUrl: 'booking.html'
})

});
app.controller('cfgController',function($scope){

    /*     
    Here you can handle controller for specific route as well.
    */
});