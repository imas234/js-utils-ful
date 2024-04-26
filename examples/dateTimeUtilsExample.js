const { structuredLogsForFunctionTests } = require("../utils/consoleHelpers");
const { formattedDateTomeForTimeZone } = require("../utils/dateTimeHelpers");

exports.dateTimeUtilsExample = () => {
  const date = new Date(1714133466520);

  console.log("Europe/London: UTC+1");
  structuredLogsForFunctionTests(
    formattedDateTomeForTimeZone,
    formattedDateTomeForTimeZone(date, "Europe/London"),
  );

  console.log("Asia/Dhaka: UTC+6");
  structuredLogsForFunctionTests(
    formattedDateTomeForTimeZone,
    formattedDateTomeForTimeZone(date, "Asia/Dhaka"),
  );
};
