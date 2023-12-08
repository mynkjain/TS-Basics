"use strict";
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
const greeting = new Greeter("Good Morning");
console.log(greeting.greet());
class BirthdayGreet extends Greeter {
    constructor(message) {
        super(message);
        this.message = message;
    }
    greet() {
        return "Happy Birthday! " + this.greeting;
    }
}
const birthdayGreet = new BirthdayGreet("Tarun");
console.log(birthdayGreet.greet());
