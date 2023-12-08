class Greeter {
  protected greeting: string;

  public constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return "Hello, " + this.greeting;
  }
}

const greeting = new Greeter("Good Morning");
console.log(greeting.greet());

class BirthdayGreet extends Greeter {
  constructor(private message: string) {
    super(message);
  }

  greet(): string {
    return "Happy Birthday! " + this.greeting;
  }
}

const birthdayGreet = new BirthdayGreet("Tarun");

console.log(birthdayGreet.greet());
