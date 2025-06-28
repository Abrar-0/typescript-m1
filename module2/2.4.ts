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

    type SamsungWatch = {
        brand: string,
        model: string
    }

    const poorDeveloper: Developer<SamsungWatch> ={
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

    type bike = {
        brand:string
        engine:number
    }

    const richDeveloper: Developer<AppleWatch> ={
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
        }
    }
}