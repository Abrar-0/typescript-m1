{
    //spread operator
    //rest operator
    //destructuring

    //spread operator

    const brothers = ['John', 'Paul', 'George', 'Ringo'];
    const brothers2 = ['Pete', 'Alex', 'Mick'];
    brothers.push(...brothers2); // ['John', 'Paul', 'George', 'Ringo', 'Pete', 'Alex', 'Mick']
    const allBrothers = [...brothers, 'Abrar'];
    console.log(allBrothers); // ['John', 'Paul', 'George', 'Ringo', 'Pete', 'Alex', 'Mick', 'Abrar']

    const mentors ={
        name: 'Abrar',
        age: 30,
        profession: 'Software Engineer'
    }

    const mentors2 = {
        name: 'John',  
        age: 25,
        profession: 'Data Scientist'
    }

    const allMentors = {...mentors, ...mentors2}

    //rest operator

    const greetFriends = (...friends:string[]) => {
        friends.forEach((friend:string) => {
            console.log(`Hello ${friend}`);
        })
    }

    greetFriends('Alice', 'Bob', 'Charlie'); // Hello Alice, Hello Bob, Hello Charlie
}