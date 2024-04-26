const { reverseString, countOfSubstring } = require("../utils/stringHelpers");
const { structuredLogsForFunctionTests } = require("../utils/consoleHelpers");

exports.stringUtilsExample = () => {
  structuredLogsForFunctionTests(
    reverseString,
    reverseString("1234"), // expected: 4321
  );

  structuredLogsForFunctionTests(
    countOfSubstring,
    countOfSubstring("hello world", "l"), // expected: 3
  );

  structuredLogsForFunctionTests(
    countOfSubstring,
    countOfSubstring("hero word", "l"), // expected: 0
  );
};
