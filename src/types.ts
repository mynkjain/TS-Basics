console.log("Hello World");

let myString: string = "Hello new world";
console.log(myString);

let myNum: number = 42;
console.log(myNum);

let myBool: boolean = true;
console.log(myBool);

let myAny: any = [];
console.log(myAny);

let strArr: string[] = ["str1", "str2", "str3"];
console.log(strArr);

let numArr: number[] = [2, 4, 5, 6];
console.log(numArr);

let boolArr: boolean[] = [true, false, true, true, true];
console.log(boolArr);

let strArrTuple: [string, string, ...number[]] = ["str1", "str2"];
console.log(strArrTuple);

let myUnion: string | number;
myUnion = 42;
console.log(myUnion);
