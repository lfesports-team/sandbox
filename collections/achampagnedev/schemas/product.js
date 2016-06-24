import { SubscriptionSchema } from './subscription.js';

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
   subscriptions: {
     type: [SubscriptionSchema()],
     label: "Subscriptions"
   }
 });
}
