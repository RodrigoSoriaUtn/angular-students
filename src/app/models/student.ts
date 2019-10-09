export class Student {

    studentId : Number
    firstName : String
    lastName : String
    email : String
    dni : Number
    careerId : Number

    constructor() {
        this.firstName = "";
        this.lastName = "";
        this.email = "";
    }

    get fullName() {
        return this.firstName + " " + this.lastName
    }

}
