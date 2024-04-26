function structuredLogsForFunctionTests(functionBeingTested, output) {
  console.log(
    "---\n",
    `testing ${functionBeingTested.name}\n`,
    `output: ${output}\n---`,
    "\n\n",
  );
}

exports.structuredLogsForFunctionTests = structuredLogsForFunctionTests;
