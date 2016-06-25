if (Meteor.isClient) {
  Accounts.onLogin(function () {
    FlowRouter.go('Dashboard');
  });

  Accounts.onLogout(function () {
    FlowRouter.go('Login');
  });
}

FlowRouter.triggers.enter([function() {
  if (!Meteor.userId()) {
    FlowRouter.go('Login');
  }
}]);

FlowRouter.route('/', {
  name: 'Dashboard',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Dashboard'});
  }
});

FlowRouter.route('/login/', {
  name: 'Login',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Login'});
  }
});

FlowRouter.route('/greetings/', {
  name: 'Greetings',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Greetings'});
  }
});

FlowRouter.route('/pricing/', {
  name: 'Pricing',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Pricing'});
  }
});

FlowRouter.route('/pricing/:id', {
  name: 'PricingSingle',
  action() {
    BlazeLayout.render('MainLayout', {main: 'PricingSingle'});
  }
});

FlowRouter.route('/pricing-add/', {
  name: 'PricingAdd',
  action() {
    BlazeLayout.render('MainLayout', {main: 'PricingAdd'});
  }
});
