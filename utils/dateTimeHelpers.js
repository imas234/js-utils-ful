/**
 * @param {Date} date
 * @param {string} timeZone
 */
function formattedDateTomeForTimeZone(date, timeZone) {
  const clonedDateForTimeZone = new Date(
    date.getTime() - date.getTimezoneOffset() * 60000,
  );
  return clonedDateForTimeZone.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: timeZone,
  });
}

exports.formattedDateTomeForTimeZone = formattedDateTomeForTimeZone;
