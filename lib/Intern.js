const Employee = require('./Employee.js');

class Intern extends Employee {

    constructor(name, email, id, school){
        super(name, email, id);

        if (typeof school !== "string" || !school.trim().length){
            throw new Error("Expected parameter 'school' to be a non-empty string");
        }

        this.school = school
    }


    getRole(){
        return 'Intern'
    }
}

module.exports = Intern