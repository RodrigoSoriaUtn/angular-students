export class Student {

    id : Number
    firstName : String
    lastName : String
    email : String
    dni : Number
    careerId : Number

    constructor() {
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.age = 0;
    }

    get fullName() {
        return this.firstName + " " + this.lastName
    }

}
