Template.Greetings.onCreated(function() {
  var self = this;

  self.autorun(function() {
    self.subscribe('AchampagneDev');
  });
});

Template.Greetings.helpers({
  greetings: () => {
    return AchampagneDev.find({isActive: true});
  }
});
