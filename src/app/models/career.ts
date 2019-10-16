export class Career {
    id : Number
    name : String
    description : String

    constructor() {
        this.name = ""
        this.description = ""
    }

    get getId() {
        return this.id;
    }

}
