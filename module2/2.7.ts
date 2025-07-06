{
    //generic constraint with keyof operator

    type Vehicle = {
        bike: string;
        car: string;
        truck: string;
    }

    type Owner = "Bike" | "Car" | "Truck"; //manually
    type Owner2 = keyof Vehicle; //automatically

    const person1 : Owner = "Bike";

    const getProperty = <X,Y extends keyof X> (obj: X, key:Y) =>{
        return obj[key];
    }

    const user = {
        name: "John",
        age: 30,    
        address: "123 Main St"
    }

    const car ={
        car: "Toyota",
        year: 2020,
        color: "Red"
    }
    
}