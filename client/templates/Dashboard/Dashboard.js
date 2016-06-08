Template.Dashboard.helpers({
  username() {
    return Meteor.user().profile.name;
  }
});
