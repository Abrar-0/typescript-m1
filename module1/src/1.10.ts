//union and intersection types
{
    type FrontEnd = 'Fakibaaj'| 'Junior';
    type FullStack = 'Frontend' | 'Expert';
    
    type Developer = FrontEnd | FullStack; // union type

    const newDeveloper: FrontEnd = 'Junior';

    type User = {
        name: string;
        email: string;
        gender: 'male' | 'female',
        bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-';
    }

    const user1: User = {
        name: 'Abrar',
        email: 'aaa',
        gender:'male',
        bloodGroup: 'A+'
    } 
    
    type FrontendDeveloper = {
        skills: string[],
        designation1: 'Junior'
    }

    type BackendDeveloper = {
        skills: string[],
        designation2: 'Expert'
    }

    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper // intersection type

    const fullStackDev: FullStackDeveloper = {
        skills: ['JavaScript', 'TypeScript', 'Node.js'],
        designation1: 'Junior',
        designation2: 'Expert'
    };
}