export class Student {

    studentId : Number
    firstName : String
    lastName : String
    email : String
    dni : Number
    address : String
    careerId : Number

    constructor() {
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.address = "";
    }

    get fullName() {
        return this.firstName + " " + this.lastName
    }

}
