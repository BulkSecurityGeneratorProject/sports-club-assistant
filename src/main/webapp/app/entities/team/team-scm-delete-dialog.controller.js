(function() {
    'use strict';

    angular
        .module('scmApp')
        .controller('TeamScmDeleteController',TeamScmDeleteController);

    TeamScmDeleteController.$inject = ['$uibModalInstance', 'entity', 'Team'];

    function TeamScmDeleteController($uibModalInstance, entity, Team) {
        var vm = this;

        vm.team = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            Team.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
