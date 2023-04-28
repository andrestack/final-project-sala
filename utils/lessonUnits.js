export function lessonUnits(millis) {
  // if(millis< 2700000){ !--- this is 45 minutes
  //   return 0 }
  //   else if(millis <= 4800000 !--- this is 80 Minutes ---! && millis > 2700000){
  //     return 1 }
  //   else{
  //     return 2
  //   }

  //   }
  // }

  return millis < 2700000 ? 0 : millis <= 4800000 && millis > 2700000 ? 1 : 2;
}
