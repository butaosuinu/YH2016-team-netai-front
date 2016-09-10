$    = require('jquery');
const riot = require('riot');

// tags
require('../tag/app.tag');
require('../tag/team.tag');
require('../tag/team-complete.tag');
require('../tag/team-create.tag');
require('../tag/team-notfound.tag');
require('../tag/team-view.tag');
require('../tag/not-found.tag');

// routing
require('riot-router');
const Route         = riot.router.Route;
const DefaultRoute  = riot.router.DefaultRoute;
const NotFoundRoute = riot.router.NotFoundRoute;
const RedirectRoute = riot.router.RedirectRoute;

riot.router.routes([
	new DefaultRoute({tag: 'app'}),
	new Route({path: 'team', tag: 'team'}).routes([
		new DefaultRoute({tag: 'team-notfound'}),
		new Route({path: 'view', tag: 'team-view'}),
		new Route({path: 'create', tag: 'team-create'}),
		new Route({path: 'complete', tag: 'team-complete'}),
		new Route({path: 'view/:id', tag: 'team-view'}),
		new Route({path: 'add-member/:id', tag: 'team-add-member'}),
		new NotFoundRoute({path: '404', tag: 'team-notfound'})
	]),
	new NotFoundRoute({path: '404', tag: 'not-found'})
]);

riot.mount('*');
riot.router.start();