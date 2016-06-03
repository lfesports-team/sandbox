import { Meteor } from 'meteor/meteor';

Meteor.publish('lightspeed', function() {
  return Lightspeed.find();
});
