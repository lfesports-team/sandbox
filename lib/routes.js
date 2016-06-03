FlowRouter.route('/', {
  name: 'dashboard',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('DashboardLayout');
  }
});

FlowRouter.route('/pricing', {
  name: 'pricing',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'Pricing'});
  }
});

FlowRouter.route('/pricing/add', {
  name: 'pricing-add',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'PricingAdd'});
  }
});
