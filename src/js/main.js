const $    = require('jquery');
const riot = require('riot');
require('riot-router');

// routing
const Route        = riot.router.Route;
const DefaultRoute = riot.router.DefaultRoute;

// tags
require('../tag/app.tag');
require('../tag/view.tag');

riot.router.routes([
	new DefaultRoute({tag: 'app'}),
	new Route({tag: 'view'})
]);

riot.mount('*');
riot.router.start();