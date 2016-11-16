export default __config

__config.$inject = [
  '$logProvider',
  'localStorageServiceProvider',
  'config'
]

function __config ($logProvider, localStorageServiceProvider, config) {
  localStorageServiceProvider
    .setPrefix(config.name);

  $logProvider.debugEnabled(false);  
}
