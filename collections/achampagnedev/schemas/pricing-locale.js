import { ContactSchema } from './contact.js';
import { ProductSchema } from './product.js';
import { CurrencySchema } from './currency.js';


export function PricingLocaleSchema() {
  return new SimpleSchema({
    locale: {
      type: String,
      label: "Locale"
    },
    currency: {
      type: CurrencySchema(),
      label: "Currency"
    },
    contact: {
      type: ContactSchema(),
      label: "Contact"
    },
    products: {
      type: [ProductSchema()],
      label: "Product",
      optional: true
    }
  });
}
