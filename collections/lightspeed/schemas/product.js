import {CurrencySchema} from './currency.js';
import {SubscriptionSchema} from './subscription.js';

export function ProductSchema() {
  return new SimpleSchema({
   name: {
     type: String,
     label: "Name"
   },
   tagline: {
     type: String,
     label: "Tagline"
   },
   currency: {
     type: CurrencySchema(),
     label: "Currency"
   },
   subscriptions: {
     type: [SubscriptionSchema()],
     label: "Subscriptions"
   }
 });
}
