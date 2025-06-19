{
    // nullable type

    const searchName = (value:string| null) =>{
        if(value){
            console.log(`Searching for ${value}`);
        }
        else{
            console.log("No value provided");
        }
    }

    searchName(null);

    //unknown type

    const getSpeedinms = (value: unknown) => {
        if (typeof value === 'number'){
            const converted = (value * 1000)/3600;
            console.log (`speed in ms is ${converted}`)
        }
        else if (typeof value === 'string'){
            const converted = parseFloat(value) * 1000 / 3600;
            console.log (`speed in ms is ${converted}`)
        }
        else{
            console.log("Invalid input type");
        }
    }

    getSpeedinms(100);
    getSpeedinms("100");
    getSpeedinms(true); // Invalid input type

    //never type 

    // const throwError = (message:string) :never=> {
    //     throw new Error(message);
    // }
    
    // throwError("This is an error message");
}