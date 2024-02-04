function isSameType(value1, value2) {
  // Prioritize NaN check to ensure accurate handling of NaN comparisons
  if (isNaN(value1) || isNaN(value2)) {
    // If either value is NaN, return true only if both are NaN
    return isNaN(value1) === isNaN(value2);
  } else {
    // If neither value is NaN, compare types directly
    return typeof value1 === typeof value2;
  }
}