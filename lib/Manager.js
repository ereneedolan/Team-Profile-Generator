const Employee = require('./Employee,js');

class Manager extends Employee {

    constructor(name, email, id, officeNumber){
        super(name, email, id);

        // if (typeof officeNumber !== "string" || !officeNumber.trim().length)
        // validating input

        this.officeNumber = officeNumber
    }
}