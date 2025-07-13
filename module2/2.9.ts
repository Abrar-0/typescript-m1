{
    //conditional type

    type a1 = number 
    type b1 = undefined
    
    type x = a1 extends null ? true : false;   //type x = false

    type y = a1 extends null ? true : b1 extends undefined ? number : any; //type y = number

    const maths : a1 = 10;
    const isDigit : y = 23

    type Sheikh = {
        bike: string;
        car : string;
        truck: string;
        plane: string;
    }

    type CheckVehicle <T> = T extends Sheikh ? true :false;

    type HasPlane = CheckVehicle<"Plane">;
}