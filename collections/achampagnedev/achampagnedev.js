import { AchampagneDevSchema } from './schemas/achampagnedev.js';

AchampagneDev = new Meteor.Collection('AchampagneDev');

AchampagneDev.attachSchema(AchampagneDevSchema());

AchampagneDev.allow({
  insert(userId, doc) {
    return !!userId;
  },
  update(userId, doc) {
    return !!userId;
  }
});

Meteor.methods({
  toggleActiveItem: function(id, currentState) {
    AchampagneDev.update(id, {
      $set: {
        isActive: !currentState
      }
    });
  }
});
