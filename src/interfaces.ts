interface PersonState {
  name: string;
  isHungry: boolean;
}

function showPersonState(personState: PersonState): string {
  return (
    personState.name + " is " + (personState.isHungry ? "hungry" : "not hungry")
  );
}

console.log(
  showPersonState({
    name: "Mayank",
    isHungry: true,
  })
);
