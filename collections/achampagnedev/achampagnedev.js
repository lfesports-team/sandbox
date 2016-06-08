import {AchampagneDevSchema} from './schemas/achampagnedev.js';

AchampagneDev = new Meteor.Collection('achampagnedev');

AchampagneDev.allow({
  insert(userId, doc) {
    return !!userId;
  }
});

AchampagneDev.attachSchema(AchampagneDevSchema());

// var lightspeed = [
//   {
//     locale: 'en_us',
//     contact: {
//       phone: '1-866-932-1801'
//     },
//     products: [
//       {
//         name: 'retail',
//         tagline: 'The right pricing plan for your business',
//         currency: {
//           type: 'USD',
//           symbol: '$',
//           before: false
//         },
//         subscriptions: [
//           {
//             type: 'small',
//             popular: false,
//             tagline: 'Opening your first store ?<br>Our POS system makes it easy.',
//             pricing: {
//               month: '99',
//               annual: '89'
//             },
//             features: [
//               {feature: '<strong>1</strong> register'},
//               {feature: '<strong>5</strong> employee access'},
//               {feature: 'Add an employee for 9$/month'},
//               {feature: 'Personalized onboarding'},
//               {feature: '24/7 support'},
//               {feature: 'Free updates'},
//               {feature: 'Secure cloud backup'},
//               {feature: 'Basic reporting'},
//               {feature: 'Omnichannel capabilities'},
//               {feature: '&dash;'}
//             ]
//           }
//         ]
//       }
//     ]
//   }
// ];
