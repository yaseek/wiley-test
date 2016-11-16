export default __service;

__service.$inject = [
  '$q',
  '$uibModal'
]

function __service ($q, $uibModal) {

  return function (title, text){
    var modalInstance = $uibModal.open({
      animation: true,
      component: 'modalUserQuestion',
      resolve: {
        params: function () {
          return {
            title: title,
            text: text
          };
        }
      }
    });

    return $q(function(resolve, reject) {
      modalInstance.result
        .then(resolve, reject)
    })

  }
}