{
    //promise

    const createPromise = (): Promise<string>=>{
        return new Promise<string>((resolve,reject)=>{
            const data: string = "Something"
            if(data){
                resolve(data);
            }
            else{
                reject("Error: No data found");
            }
        })
    }

    //calling the promise
    const showData = async () =>{
        const data = await createPromise();
        console.log(data);  
    }

    // showData();

    //fetching data from an API

    type Todo = {
        userId: number;
        id: number;
        title: string;
        completed: boolean; 
    }

    const getTodo = async () : Promise<Todo> =>{
        const response= await fetch("https://jsonplaceholder.typicode.com/todos/1");

        const data = await response.json();
        return data
    }

    getTodo();

}