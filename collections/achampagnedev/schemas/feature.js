export function FeatureSchema() {
  return new SimpleSchema({
    feature: {
      type: String,
      label: "Feature",
      optional: true
    },
    feature_annual_override: {
      type: Boolean,
      label: "Is different of monthly?",
      optional: true
    },
    feature_annual: {
      type: String,
      label: "Feature annual",
      optional: true
    }
  });
}
