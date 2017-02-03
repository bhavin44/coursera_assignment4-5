(function () {


    angular.module('public')
    .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuService'];
    function SignUpController(MenuService) {
        var $signUpCtrl = this;

        $signUpCtrl.submit = function () {
            MenuService.getFavoriteDish($signUpCtrl.user.favoriteDish).then(function (response) {
                MenuService.setUserProfile($signUpCtrl.user);
                $signUpCtrl.user.favDish = response.data;
                $signUpCtrl.success = true;
                $signUpCtrl.error = false;
            }, function (response) {
                $signUpCtrl.success = false;
                $signUpCtrl.error = true;
            });
           
        };
    }

})();