{
    //constraints

    const addCourseToStudent = <T extends {id:number; name:string}>(student: T) =>{ //adding constraints to the generic type T so that it must have id and name properties
        const course = "TypeScript Basics";

        return {...student, course}
    }

    const student1 = addCourseToStudent<{id: number; name: string; age: number;}>({id:23,name: "Alice", age: 20});
    const student2 = addCourseToStudent({id: 34, name: "Bob", age: 22, grade: "A"});

} 