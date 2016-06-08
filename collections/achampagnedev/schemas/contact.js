export function ContactSchema() {
  return new SimpleSchema({
    phone: {
      type: String,
      label: "Contact phone"
    }
  });
}
