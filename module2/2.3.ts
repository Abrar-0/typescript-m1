{
    //generic type
    type GenericArray<T> = Array<T>; // type alias for generic array type

    //const rollNumbers: number[] = [101, 102, 103];
    const rollNumbers: GenericArray<number> = [101, 102, 103];  // using generic type Array<T>

    //const mentors : string[] = ["Alice", "Bob", "Charlie"];
    const mentors : GenericArray<string> = ["Alice", "Bob", "Charlie"]; // using generic type Array<T>

    //const boolArray : boolean[] = [true, false, true];
    const boolArray : GenericArray<boolean> = [true, false, true]; // using generic type Array<T>

    const add = ( x:number, y:number) => x+y; 

    const user: GenericArray<{name:string, age:number, isActive:boolean}>= [
        {
            name: "John Doe",
            age: 30,
            isActive: true
        },
        {
            name: "Jane Doe",
            age: 25,
            isActive: false
        }
    ]

    //generic tuple

    type GenericTuple <X,Y> = [X,Y]
    
    const manush: GenericTuple<string,string> = ["Mr x", "Mr y"]

    const userWithId : GenericTuple < number, {name:string, Emaail:string}> = [1234, {name: "Abrar", email: "aaa"}]

}