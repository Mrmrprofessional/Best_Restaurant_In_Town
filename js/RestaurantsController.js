bestRestaurant.controller("RestaurantsCtrl", function RestaurantsCtrl($scope) {
  $scope.restaurants = []
  $scope.addRestaurant = function() {
    $scope.restaurants.push({ name: $scope.restaurantName,
      type: $scope.restaurantType, price: $scope.restaurantPrice,
      address: $scope.restaurantAddress
      });
    $scope.restaurantName = null;
    $scope.restaurantType = null;
    $scope.restaurantPrice = null;
    $scope.restaurantAddress = null;
  };
  $scope.deleteRestaurant = function(restaurant) {
    var index = $scope.restaurants.indexOf(restaurant);
    $scope.restaurants.splice(index, 1);
  };
});
