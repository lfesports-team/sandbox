FlowRouter.route('/', {
  name: 'main',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Dashboard'});
  }
});

FlowRouter.route('/pricing', {
  name: 'pricing',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Pricing'});
  }
});

FlowRouter.route('/pricing/add', {
  name: 'pricing-add',
  action() {
    BlazeLayout.render('MainLayout', {main: 'PricingAdd'});
  }
});
