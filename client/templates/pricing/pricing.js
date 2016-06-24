Template.Pricing.onCreated(function() {
  var self = this;

  self.autorun(function() {
    self.subscribe('AchampagneDev');
  });
});

Template.Pricing.helpers({
  greetings: () => {
    return AchampagneDev.find({});
  }
});
