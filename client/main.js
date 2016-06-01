import {Template} from 'meteor/templating';

import './main.html';

Template.pricing.helpers({
  tld_data: [
    {
      locale: 'en_us',
      contact: {
        phone: '1-866-932-1801'
      },
      products: [
        {
          name: 'retail',
          tagline: 'The right pricing plan for your business',
          currency: {
            type: 'USD',
            symbol: '$',
            before: false
          },
          subscriptions: [
            {
              type: 'small',
              popular: false,
              tagline: 'Opening your first store ?<br>Our POS system makes it easy.',
              pricing: {
                month: '99',
                annual: '89'
              },
              features: [
                {feature: '<strong>1</strong> register'},
                {feature: '<strong>5</strong> employee access'},
                {feature: 'Add an employee for 9$/month'},
                {feature: 'Personalized onboarding'},
                {feature: '24/7 support'},
                {feature: 'Free updates'},
                {feature: 'Secure cloud backup'},
                {feature: 'Basic reporting'},
                {feature: 'Omnichannel capabilities'},
                {feature: '&dash;'}
              ]
            }
          ]
        }
      ]
    }
  ]
});

/***
 *
 * en_us
 * en_ca
 * en_uk
 * fr_ca
 * fr_be
 * fr_fr
 * nl_nl
 * nl_be
 * de_de
 *
 */
