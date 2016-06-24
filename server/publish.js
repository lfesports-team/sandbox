import { Meteor } from 'meteor/meteor';

Meteor.publish('AchampagneDev', function() {
  return AchampagneDev.find({});
});

Meteor.publish('AchampagneDevSingle', function(id) {
  check(id, String);
  return AchampagneDev.find({_id: id});
});
