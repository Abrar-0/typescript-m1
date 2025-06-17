//destructuring
{
    const user ={
        id:345,
        name:{
            first: "abrar",
            last: "khan"
        },
        contact: 1020404434,
        adrress: "Japan"
    }

    const {contact,
        name:{last: Lastname} //name alias
        } = user;
 
        
    const myFriends = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve', 'Frank'];

    const[,,c, ...rest] = myFriends; //,, -> skip first two elements // c = Charlie, rest = ['Dave', 'Eve', 'Frank']


}