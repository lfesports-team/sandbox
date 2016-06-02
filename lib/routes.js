FlowRouter.route('/', {
  name: 'dashboard',
  action() {
    BlazeLayout.render('DashboardLayout');
  }
});

FlowRouter.route('/pricing/', {
  name: 'pricing',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Pricing'});meteo
  }
});

FlowRouter.route('/pricing/add/', {
  name: 'pricing-add',
  action() {
    BlazeLayout.render('MainLayout', {main: 'PricingAdd'});
  }
});
