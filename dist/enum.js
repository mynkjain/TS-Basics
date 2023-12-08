"use strict";
var Colors;
(function (Colors) {
    Colors[Colors["RED"] = 0] = "RED";
    Colors[Colors["YELLOW"] = 1] = "YELLOW";
    Colors[Colors["GREEN"] = 2] = "GREEN";
})(Colors || (Colors = {}));
const myColor = Colors.YELLOW;
console.log(myColor);
var Days;
(function (Days) {
    Days[Days["MON"] = 0] = "MON";
    Days[Days["TUE"] = 1] = "TUE";
    Days[Days["WED"] = 2] = "WED";
    Days[Days["THU"] = 3] = "THU";
    Days[Days["FRI"] = 4] = "FRI";
    Days[Days["SAT"] = 5] = "SAT";
    Days[Days["SUN"] = 6] = "SUN";
})(Days || (Days = {}));
const getDatilyMessase = (day) => {
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
