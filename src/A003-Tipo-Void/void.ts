function noReturn(...args: string[]): void {
    console.log(args.join(''));
}

noReturn('Hello', 'World');

const person = {
    name: 'John',
    age: 30,

    greet(): void {
        console.log(`Hello, I'm ${this.name} my age is ${this.age}`);
    },
};

export { person };

const person2 = {
    name: 'John',
    age: 30,

    salut(): void {
        console.log(`Hello, I'm ${this.name} my age is ${this.age}`);
    },
};

export { person2 };
