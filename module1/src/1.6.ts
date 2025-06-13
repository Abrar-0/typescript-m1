//Learning functions
// Normal function
// Arrow function

// Normal function

function add(num1: number, num2: number): number {
    return num1 + num2;
}

add (5, 10); // returns 15

// Arrow function

const addArrow = (num1: number, num2: number = 10): number => num1 + num2;
addArrow(5, 10); // returns 15

//object -> function -> method
const poorUser = {
    name: "Alice",
    balance: 1000,
    addBalance(balance: number): string {
        return `My new balance is ${this.balance + balance}`;
    }
}

//callback function

const arr:number[] = [1, 2, 3, 4, 5];
const double:number[] = arr.map((elem:number) :number => elem*elem)