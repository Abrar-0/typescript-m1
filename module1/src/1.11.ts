{
    //ternary operator || optional chaining || nullish coalescing

    // Ternary operator

    const age: number = 15;

    if (age >= 18) {
        console.log("You are an adult.");
    } else {
        console.log("You are a minor.");
    }

    const isAdult = age >= 18 ? "adult" : "minor";
    console.log(isAdult);

    //nullish coalescing operator

    const userInput = null;

    const result1 = userInput ?? "Guest";
    console.log(result1); // Output: Guest

    const result2 = userInput ? userInput : "Guest";
    console.log(result2); // Output: Guest


    //optional chaining operator

    type User = {
        name: string;
        email?: string; // optional property
        address?: {
            street?: string; // optional nested property
            city?: string; // optional nested property
        };
    }

    const user1: User = {
        name: "John Doe",
        email: "asas",
        address: {
            //street: "123 Main St",
            city: "New York"
        }
    }

    const street = user1?.address?.street ?? "No street provided";
    console.log({street}); // Output: undefined (no error, just undefined)
}
