export function CurrencySchema() {
  return new SimpleSchema({
    type: {
      type: String,
      label: "Currency type"
    },
    symbol: {
      type: String,
      label: "Currency symbol",
    },
    before: {
      type: Boolean,
      label: "Before price"
    }
  });
}
