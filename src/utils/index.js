export const formatDate = (dateValue) => {
  if (!dateValue) return "";

  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return String(dateValue);

  return date.toISOString().split("T")[0];
};

export const calculateReadTime = (text) => {
  const wordsPerMinute = 200; // Average reading speed
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wordsPerMinute);
  return time;
};

export const wordsCount = (text) => {
  return text.trim().split(/\s+/).length;
};

export const charactersCount = (text) => {
  return text.length;
};
