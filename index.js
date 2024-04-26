const { dateTimeUtilsExample } = require("./examples/dateTimeUtilsExample");
const { objUtilsExample } = require("./examples/objUtilsExample");
const { stringUtilsExample } = require("./examples/stringUtilsExample");

const arg = process.argv[2];

switch (arg) {
  case "string":
    stringUtilsExample();
    break;
  case "date":
    dateTimeUtilsExample();
    break;
  case "obj":
    objUtilsExample();
    break;
  default:
    stringUtilsExample();
    dateTimeUtilsExample();
    objUtilsExample();
    break;
}
