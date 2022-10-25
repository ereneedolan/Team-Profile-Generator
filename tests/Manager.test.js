// name
// id
// email 
// getName()
// getId()
// getEmail()
// getRole() - returns "employee"
// officeNumber
// getRole() - overriden to return "Manager"

const Manager = require("../lib/Manager.js");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create an object with a name, age, id and office number if provided valid arguments", () => {
        const name = "Eileen"
        const email = "eileenrdolan@gmail.com"
        const id = "001"
        const officeNumber = "123"
      
        const manager = new Manager(name, email, id, officeNumber);

        expect(manager.name).toEqual(name);
        expect(manager.email).toEqual(email);
        expect(manager.id).toEqual(id);
        expect(manager.officeNumber).toEqual(officeNumber);

    });

    it("should throw an error if provided no arguments", () => {
      const cb = () => new Manager();

      expect(cb).toThrow();
    });

    it("should throw an error if not provided an name", () => {
        const name = ""
        const email = "eileenrdolan@gmail.com"
        const id = "001"
        const officeNumber = "123"
        const cb = () => new Manager(name, email, id, officeNumber);
        const err = new Error("Expected parameter 'name' to be a non-empty string");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if not provided an email", () => {
        const name = "Eileen"
        const email = ""
        const id = "001"
        const officeNumber = "123"
        const cb = () => new Manager(name, email, id, officeNumber);
        const err = new Error("Expected parameter 'email' to be a non-empty string");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if not provided an id", () => {
        const name = "Eileen"
        const email = "eileenrdolan@gmail.com"
        const id = ""
        const officeNumber = "123"
        const cb = () => new Manager(name, email, id, officeNumber);
        const err = new Error("Expected parameter 'id' to be a non-empty string");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if not provided an office number", () => {
        const name = "Eileen"
        const email = "eileenrdolan@gmail.com"
        const id = "001"
        const officeNumber = ""
        const cb = () => new Manager(name, email, id, officeNumber);
        const err = new Error("Expected parameter 'officeNumber' to be a non-empty string");

      expect(cb).toThrowError(err);
    });
});

describe("getName()", () => {
    it("should always return type 'name'", ()=>{
        const name = "Eileen"
        const email = "eileenrdolan@gmail.com"
        const id = "001"
        const officeNumber = "123"

        const employee = new Manager(name, email, id, officeNumber);

        expect(employee.getName()).toEqual(name);
    })
})

describe("getEmail()", () => {
    it("should always return type 'email'", ()=>{
        const name = "Eileen"
        const email = "eileenrdolan@gmail.com"
        const id = "001"
        const officeNumber = "123"
        const employee = new Manager(name, email, id, officeNumber);

        expect(employee.getEmail()).toEqual(email);
    })
})

describe("getId()", () => {
    it("should always return type 'id'", ()=>{
        const name = "Eileen"
        const email = "eileenrdolan@gmail.com"
        const id = "001"
        const officeNumber = "123"
        const employee = new Manager(name, email, id, officeNumber);

        expect(employee.getId()).toEqual(id);
    })
})

describe("getRole()", () => {
    it("should always return type 'Manager'", ()=>{
        const name = "Eileen"
        const email = "eileenrdolan@gmail.com"
        const id = "001"
        const officeNumber = "123"

        const employee = new Manager(name, email, id, officeNumber);

        expect(employee.getRole()).toEqual('Manager');
    })
})
    
});
