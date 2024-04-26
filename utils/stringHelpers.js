/**
 * @param {string} s
 */
function reverseString(s) {
  if (typeof s !== "string") {
    throw new Error("input must be a string");
  }

  return s.split("").reverse().join("");
}

/**
 * @param {string} inputString
 * @param {string} substringToCountFor
 */
function countOfSubstring(inputString, substringToCountFor) {
  if (typeof inputString !== "string") {
    throw new Error("inputString must be a string");
  }
  if (typeof substringToCountFor !== "string") {
    throw new Error("substringToCountFor must be a string");
  }

  // Handle empty substring or empty string
  if (!substringToCountFor || !inputString) {
    return 0;
  }

  let count = 0;
  let index = 0;

  while (index !== -1) {
    // Find the index of the substring within the input string
    index = inputString.indexOf(substringToCountFor, index);

    if (index !== -1) {
      // Increment count if substring is found
      count++;
      // Update index to start search after the current substring
      index += substringToCountFor.length;
    }
  }

  return count;
}

exports.reverseString = reverseString;
exports.countOfSubstring = countOfSubstring;
