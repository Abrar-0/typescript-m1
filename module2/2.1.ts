{
    //type assertion

    let anything : any;

    anything = "Hello, World!";
    anything = 42;
    (anything as number). 

    const kgtogram = (value:string| number):string |number |undefined =>{
        if( typeof value === 'string'){
            const converted = parseFloat(value) * 1000;
            return converted;
        }

        if (typeof value === 'number') {
            const converted = value * 1000;
            return converted;
        }

    }
    const result1 = kgtogram(5.5) as number;
    const result2 = kgtogram("5.5") as string; 


    type customError = {
        message: string;
    }
    try {

    }catch(error){
        console.log((error as customError).message);
    }
}