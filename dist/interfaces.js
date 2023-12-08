"use strict";
function showPersonState(personState) {
    return (personState.name + " is " + (personState.isHungry ? "hungry" : "not hungry"));
}
console.log(showPersonState({
    name: "Mayank",
    isHungry: true,
}));
