import {PricingLocaleSchema} from './pricing-locale.js';

export function AchampagneDevSchema() {
  return new SimpleSchema({
    pricing_locale: {
      type: [PricingLocaleSchema()],
      label: "Pricing Locale"
    }
  });
}
