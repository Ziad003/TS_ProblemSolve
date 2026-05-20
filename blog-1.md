# 3. How Generics Help in TypeScript

# Introduction
Generics allow us to write reusable code while keeping type safety.

# Example

```ts
function getValue<T>(value: T): T {
  return value;
}

const name = getValue<string>("Hasib");
const age = getValue<number>(21);
//Here, the same function works for different data types.
```
# Conclusion
Generics make TypeScript code flexible, reusable, and safe without losing type information.