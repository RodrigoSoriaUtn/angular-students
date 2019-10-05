export class Student {

    id : Number
    name : String
    surName : String
    email : String
    dni : Number
    age : Number

    constructor() {
        this.name = "";
        this.surName = "";
        this.email = "";
        this.age = 0;
    }

    get fullName() {
        return this.name + " " + this.surName
    }

}
