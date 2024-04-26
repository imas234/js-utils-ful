const { structuredLogsForFunctionTests } = require("../utils/consoleHelpers");
const { deepMerge } = require("../utils/objHelpers");

exports.objUtilsExample = () => {
  const objRand = { a: 12 };
  const arrInputA = [1, 2];
  const arrInputB = [3, objRand];

  const shallowMergedArrayA = [...arrInputA, ...arrInputB];
  const deepMergedArrayA = deepMerge([1, 2], [3, objRand]);

  structuredLogsForFunctionTests(deepMerge, deepMergedArrayA);

  objRand.a = 14;

  console.log("\nshallow:", shallowMergedArrayA, "\ndeep:", deepMergedArrayA);

  const objRandInputA = { a: 12, b: { bb: 13 } };
  const objRandInputB = { c: 14, d: 15 };

  const objOfObj = {
    a: objRandInputA,
    b: objRandInputB,
  };

  const flippedObjOfObj = {
    c: objRandInputA,
    d: objRandInputB,
  };

  const shallowMergedObj = { ...objOfObj, ...flippedObjOfObj };
  const deepMergedObj = deepMerge(objOfObj, flippedObjOfObj);

  objRandInputB["e"] = 16;
  objRandInputA["a"] = 17;
  objRandInputA["b"]["bb"] = 18;

  console.log("\nshallow:", shallowMergedObj, "\ndeep:", deepMergedObj);
};
