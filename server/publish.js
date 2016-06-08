import { Meteor } from 'meteor/meteor';

Meteor.publish('achampagnedev', function() {
  return AchampagneDev.find();
});
