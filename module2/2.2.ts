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

    interface

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
}