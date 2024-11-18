export const formatTime = (date) => {
  if (!(date instanceof Date) || isNaN(date)) {
    throw new Error("Invalid Date object");
  }
  return date.toLocaleTimeString("en-us", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
};
