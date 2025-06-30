{
    // geenric function

    const createArray = (param: string): string [] =>{
        return [param]
    }

    const createArrayWithGeneric = <T>(param: T): T [] =>{
        return [param]
    }

    const res1 = createArray("Hello World");
    const res2 = createArrayWithGeneric<boolean>(true);

    type user = {
        id: number,
        name: string
    }

    const res3 = createArrayWithGeneric<user>({id:12, name:"John"})

    const createArrayWithTuple = <T,Y>(param1: T,param2:Y): [T,Y] =>{
        return [param1, param2]
    }

    const res4 = createArrayWithTuple<string,number>("Hello", 123);

    interface User{ 
        id:number;
        name:string
    }
    const res5 = createArrayWithTuple<boolean,User>(true, {id: 1, name: "John"});

    const addCourseToStudent = <T>(student: T) =>{
        const course = "TypeScript Basics";

        return {...student, course}
    }

    const student1 = addCourseToStudent({name: "Alice", age: 20});
    const student2 = addCourseToStudent({name: "Bob", age: 22, grade: "A"});

    console.log(student1); // { name: 'Alice', age: 20, course: 'TypeScript Basics' }
    console.log(student2); // { name: 'Bob', age: 22, grade: 'A', course: 'TypeScript Basics' }
}