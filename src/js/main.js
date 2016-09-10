const $    = require('jquery');
const riot = require('riot');

// tags
require('../tag/app.tag');
require('../tag/view.tag');
require('../tag/event.tag');
require('../tag/event-complete.tag');
require('../tag/event-create.tag');
require('../tag/event-notfound.tag');
require('../tag/event-view.tag');
require('../tag/not-found.tag');

// routing
require('riot-router');
const Route         = riot.router.Route;
const DefaultRoute  = riot.router.DefaultRoute;
const NotFoundRoute = riot.router.NotFoundRoute;
const RedirectRoute = riot.router.RedirectRoute;

riot.router.routes([
	new DefaultRoute({tag: 'app'}),
	new Route({path: 'event', tag: 'event'}).routes([
		new DefaultRoute({tag: 'event-notfound'}),
		new Route({path: 'view', tag: 'event-view'}),
		new Route({path: 'create', tag: 'event-create'}),
		new Route({path: 'complete', tag: 'event-complete'}),
		new Route({path: 'view/:id', tag: 'event-view'}),
		new Route({path: 'view/add-member/:id', tag: 'event-add-member'}),
		new NotFoundRoute({path: '404', tag: 'event-notfound'})
	]),
	new NotFoundRoute({path: '404', tag: 'not-found'})
]);

riot.mount('*');
riot.router.start();