export function PricingSchema() {
  return new SimpleSchema({
    monthly: {
      type: Number,
      label: "Monthly price"
    },
    annually: {
      type: Number,
      label: "Annual price"
    }
  });
}
