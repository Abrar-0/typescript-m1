//type alias
{

    type Student = {
        name: string;
        age: number;
        gender: string;
        contact?: number; // optional property
        address: string;
    }


  const student1: Student = {
    name: "Abrar",
    age: 30,
    gender: "male",
    contact: 1020404434,
    address: "Japan",
  };

  const student2:Student = {
    name: "John",
    age: 25,
    gender: "male",
    address: "USA",
  };

  type UserName = string
  type IsAdmin = boolean

  const userName: UserName = "Abrar Khan";
  const isAdmin: IsAdmin = true;

  type Add = (num1: number, num2: number) => number;
  
  const add:Add = (num1, num2) => {
    return num1 + num2;
  }
}

  