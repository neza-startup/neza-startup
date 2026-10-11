const formatDate = (dateValue) => {
  if (!dateValue) return "";

  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return String(dateValue);

  return date.toISOString().split("T")[0];
};

export default formatDate;
