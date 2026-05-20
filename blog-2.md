# 4. Four Pillars of OOP in TypeScript

# Introduction

OOP helps organize large projects and reduce complexity.

```ts
# 1. Inheritance
//Allows one class to reuse another class's properties and methods.
class Animal {
  speak() {
    console.log("Animal sound");
  }
}
class Dog extends Animal {}


# 2. PolyMorphism
//Same method behaves differently.
class Animal {
  sound() {
    console.log("Sound");
  }
}

class Cat extends Animal {
  sound() {
    console.log("Meow");
  }
}


# 3. Abstraction
//Hides implementation details and shows only important features.
abstract class Payment {
  abstract pay(amount: number): void;
}

class BkashPayment extends Payment {
  pay(amount: number): void {
    console.log(`Paid ${amount} টাকা with Bkash`);
  }
}


# 4. Encapsulation
//Protects data from direct access.
class User {
  private password = "1234";
}
```

#Conclusion
So, we can say the four pillars of OOP help developers build clean, scalable, and maintainable TypeScript applications which help to manage logic and reduce complexity in large-scale TypeScript project.
