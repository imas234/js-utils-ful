function deepMerge(objA, objB) {
  const objAType = typeof objA;
  const objBType = typeof objB;

  if (objAType !== "object" || objBType !== "object") {
    throw new Error("Both arguments must be objects or arrays");
  }

  const isObjAArray = Array.isArray(objA);
  const isObjBArray = Array.isArray(objB);

  if (isObjAArray && isObjBArray) {
    return [...structuredClone(objA), ...structuredClone(objB)];
  }

  if ((isObjAArray && !isObjBArray) || (isObjBArray && !isObjAArray)) {
    throw new Error(
      "Either both arguments must be objects or both arguments must be arrays",
    );
  }

  return {
    ...structuredClone(objA),
    ...structuredClone(objB),
  };
}

exports.deepMerge = deepMerge;
