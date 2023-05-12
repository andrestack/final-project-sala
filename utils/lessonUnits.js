export function lessonUnits(millis) {
  return millis < 2700000 ? 10 : millis <= 4800000 && millis > 2700000 ? 1 : 2;
}

// 2700000 - this is 45 minutes
// 4800000 - this is 80 Minutes
