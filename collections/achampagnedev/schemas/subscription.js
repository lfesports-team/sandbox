import { PricingSchema } from './pricing.js';
import { FeatureSchema } from './feature.js';

export function SubscriptionSchema() {
  return new SimpleSchema({
    type: {
      type: String,
      label: "Subscription type"
    },
    popular: {
      type: Boolean,
      label: "Popular"
    },
    tagline: {
      type: String,
      label: "Tagline"
    },
    pricing: {
      type: PricingSchema(),
      label: "Pricing"
    },
    features: {
      type: [FeatureSchema()],
      label: "Features"
    }
  });
}
