//Problem 1:
const filterEvenNumbers = (arr: number[]): number[] => {
  return arr.filter((num) => num % 2 === 0);
};

//Problem 2:
const reverseString = (input: string): string => {
  const arrStr = [];
  for (let i = input.length - 1; i >= 0; i--) {
    arrStr.push(input[i]);
  }
  return arrStr.join("");
}; // or  return input.split("").reverse().join("")

//Problem 3:
type StringOrNumber = string | number;
const checkType = (input: StringOrNumber): string => {
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
};

//Problem 4:
const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
};

//Problem 5:
const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isRead?: boolean;
}

const togtoggleReadStatus = (input: Book): Book => {
  return {
    title: input.title,
    author: input.author,
    publishedYear: input.publishedYear,
    isRead: input.isRead ?? true,
  };
};

//Problem 6:
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
}

//Problem 7:
const getIntersection = (input1: number[], input2: number[]): number[] => {
  const newArr = [];
  for (let i = 0; i < input1.length; i++) {
    for (let j = 0; j < input2.length; j++) {
      if (input1[i] === input2[j]) {
        newArr.push(input1[i]);
      }
    }
  }
  return newArr;
  //or return input1.filter(item=>input2.includes(item))
};
console.log(getIntersection([12, 3, 3], [3, 4, 5]));
