//Reference type --> Object

const user: { name: string; age: number } = {
  name: "Alice",
    age: 30,
};

const user1: {
    firstName: string;
    middleName?: string; // ? -> optional property
    readonly lastName: string;
    age: number;
    company: 'Microsoft' //literal type
} = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    company: 'Microsoft'
}

user1.firstName = "Jane"; // valid
//user1.lastName = "Smith"; // error: it is a read-only property