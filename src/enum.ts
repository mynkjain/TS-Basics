enum Colors {
  RED,
  YELLOW,
  GREEN,
}

const myColor: Colors = Colors.YELLOW;

console.log(myColor);

enum Days {
  MON,
  TUE,
  WED,
  THU,
  FRI,
  SAT,
  SUN,
}

const getDatilyMessase = (day: Days): string => {
  switch (day) {
    case Days.MON:
      return "Get a coffee and get busy";
    case Days.FRI:
      return "Push through, weekend is coming";
    default:
      return "Its a normal day";
  }
};

console.log(getDatilyMessase(Days.MON));
