{
    //interface

    type User1= {
        name: string;
        age: number;
    }

    interface User2{ 
        name: string;
        age: number;
    }

    interface UserWithRole2 extends User2 { // interface can extend another interface and also a type -> extends User1
        role: string;
    }

    type UserWithRole = User1 & {role: string}; // intersection type
    const userR : UserWithRole = {
        name: "Alice",
        age: 28,
        role: "Admin"
    }

    type rollnumber = number; //interface can not be used to define primitive types like number, string, etc. It is used for objects, arrays, functions, etc.
    
    const user1:  User1 = {
        name: "John Doe",
        age: 30
    }

    const user2: User2 = {
        name: "Jane Doe",
        age: 25
    }

    type roll1 = number[]

    const rollNumbers: roll1 = [101, 102, 103];

    interface roll2 {
        [index: number] : number; // index signature
    }

    const rollNumbers2: roll2 = [201, 202, 203];

    type Add  = (a: number, b: number) => number; // type alias for function type

    interface Add2 {
        (a:number, b:number) : number
    }

    const add : Add = (a,b) => a+b

    const add2: Add2 = (a, b) => a + b;
}