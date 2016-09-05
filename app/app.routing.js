"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var education_component_1 = require('./education/education.component');
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'education', component: education_component_1.EduComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map