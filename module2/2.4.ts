{
    //generic interface

    interface Developer<T, Y = null> {  //default value for bike is null
        name:string
        computer:{
            brand:string
            model:string
            year:number
        }
        smartWatch: T
        bike?: Y
    }

    type SamsungWatch = { //defining a type for Samsung Watch instead of writing it inline inside Developer interface as a parameter
        brand: string,
        model: string
    }

    const poorDeveloper: Developer<SamsungWatch> ={ //used here SamsungWatch type as a parameter for smartWatch
        name: "John Doe",
        computer: {
            brand: "Dell",
            model: "XPS 13",
            year: 2021
        },
        smartWatch: {  //T
            brand: "Samsung",
            model: "Galaxy Watch 4"
        }
    }

    interface AppleWatch{
        brand: string
        model: string
        heartRateMonitor: boolean
        sleepTracking: boolean
    }

    type YamahaBike = {  // both type and interface can be used as a parameter for Developer interface
        brand:string
        engine:number  
    }

    const richDeveloper: Developer<AppleWatch,YamahaBike> ={
        name: "John Doe",
        computer: {
            brand: "HP",
            model: "Elitebook",
            year: 2021
        },
        smartWatch: {  //T
            brand: "Apple",
            model: "Series 9",
            heartRateMonitor: true,
            sleepTracking: true
        },
        bike:{
            brand:"Yamaha",
            engine: 150
        }
    }
}