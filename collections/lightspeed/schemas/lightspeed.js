import {PricingLocaleSchema} from './pricing-locale.js';

export function LightspeedSchema() {
  return new SimpleSchema({
    pricing_locale: {
      type: [PricingLocaleSchema()],
      label: "Pricing Locale"
    }
  });
}
