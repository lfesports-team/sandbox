import { AchampagneDevSchema } from './schemas/achampagnedev.js';

AchampagneDev = new Meteor.Collection('AchampagneDev');

AchampagneDev.attachSchema(AchampagneDevSchema());

AchampagneDev.allow({
  insert(userId, doc) {
    return !!userId;
  }
});
