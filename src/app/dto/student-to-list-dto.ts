export class StudentToListDTO {

        studentId : Number
        firstName : String
        lastName : String
        email : String
        dni : Number
        address : String
        careerName : String
    
        constructor(studentId : Number = null, firstName : String = "", lastName : String = "", email : String = "", dni : Number = null, address : String = "" , careerName : String = "") {
            this.studentId = studentId;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.dni = dni;
            this.address = address;
            this.careerName = careerName;
        }
    
        get fullName() {
            return this.firstName + " " + this.lastName
        }
    
    }