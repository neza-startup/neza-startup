const formatMexicanPhone = (phone = "") => {
  const cleanedPhone = String(phone).trim().replace(/\s+/g, "");

  const withoutPrefix = cleanedPhone
    .replace(/^\+52/, "")
    .replace(/^52/, "");

  return `+52${withoutPrefix}`;
};

export default formatMexicanPhone;
