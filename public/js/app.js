window.app = angular.module('ngFantasyFootball', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ngRoute', 'ngff.controllers', 'ngff.directives', 'ngff.services', 'ngff.controllers.nfl', 'ngff.services.leagues']);

// bundling dependencies
window.angular.module('ngff.controllers', ['ngff.controllers.header','ngff.controllers.index','ngff.services.nfl','ngff.controllers.leagues']);
window.angular.module('ngff.services', ['ngff.services.global']);