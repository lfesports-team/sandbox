Template.PricingSingle.onCreated(function() {
  var self = this;

  self.autorun(function() {
    var id = FlowRouter.getParam('id');
    self.subscribe('AchampagneDevSingle', id);
  });
});

Template.PricingSingle.helpers({
  name: () => {
    var id = FlowRouter.getParam('id');
    return AchampagneDev.findOne({_id: id});
  }
});
