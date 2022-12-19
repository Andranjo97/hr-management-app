import Positions from './Positions';

class Person {
    id: string;
    firstName: string;
    middleName?: string;
    profilePicUrl: URL;
    dob: Date;
    startDate: Date;
    position: Positions;
    email: string;
    reportsTo: string;
    creationDate: Date;
    resignationDate?: Date;
}

export default Person;
