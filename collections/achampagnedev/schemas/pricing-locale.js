import {ContactSchema} from './contact.js';
import {ProductSchema} from './product.js';

export function PricingLocaleSchema() {
  return new SimpleSchema({
    locale: {
      type: String,
      label: "Locale"
    },
    contact: {
      type: ContactSchema(),
      label: "Contact"
    },
    products: {
      type: [ProductSchema()],
      label: "Products"
    }
  });
}
