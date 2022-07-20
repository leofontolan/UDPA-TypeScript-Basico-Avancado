/*eslint-disable */


//Tipos básicos
let fullName: string = 'John Doe';
let age: number = 43;
let adult: boolean = true;
let symbol: symbol = Symbol('qualquer-symbol');
let big: bigint = BigInt(123);

//Arrays
let arrayOfNumbers: Array<number> = [1, 2, 3];
let arrayOfStrings: Array<string> = ['a', 'b', 'c'];

let arrayOfNumbers2: number[] = [1, 2, 3];
let arrayOfStrings2: string[] = ['a', 'b', 'c'];

//Objects
let person: {fullName: string, age: number, adult?: boolean | undefined} = {
    fullName: 'John Doe',
    age: 43,
    adult: true
};







//Functions
function sum(x: number,y: number): number{
    return x + y;
}

const sum2: (x: number, y: number) => number = (x: number, y: number) => x + y;
console.log(sum2);
