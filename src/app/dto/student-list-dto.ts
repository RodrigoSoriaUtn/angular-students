export class StudentListDTO {

        studentId : Number
        firstName : String
        lastName : String
        email : String
        dni : Number
        address : String
        careerName : String
    
        constructor() {
            this.firstName = "";
            this.lastName = "";
            this.email = "";
            this.address = "";
            this.careerName = "";
        }
    
        get fullName() {
            return this.firstName + " " + this.lastName
        }
    
    }