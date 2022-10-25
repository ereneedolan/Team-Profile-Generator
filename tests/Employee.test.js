
// name
// id
// email 
// getName()
// getId()
// getEmail()
// getRole() - returns "employee"

const Employee = require("../lib/Employee.js");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with a name, age and id if provided valid arguments", () => {
        const name = "Eileen"
        const email = "eileenrdolan@gmail.com"
        const id = "001"
      
        const employee = new Employee(name, email, id);

        expect(employee.name).toEqual(name);
        expect(employee.email).toEqual(email);
        expect(employee.id).toEqual(id);

    });

    it("should throw an error if provided no arguments", () => {
      const cb = () => new Employee();

      expect(cb).toThrow();
    });

    it("should throw an error if not provided an name", () => {
        const name = ""
        const email = "eileenrdolan@gmail.com"
        const id = "001"
        const cb = () => new Employee(name, email, id);
        const err = new Error("Expected parameter 'name' to be a non-empty string");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if not provided an email", () => {
        const name = "Eileen"
        const email = ""
        const id = "001"
        const cb = () => new Employee(name, email, id);
        const err = new Error("Expected parameter 'email' to be a non-empty string");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if not provided an id", () => {
        const name = "Eileen"
        const email = "eileenrdolan@gmail.com"
        const id = ""
        const cb = () => new Employee(name, email, id);
        const err = new Error("Expected parameter 'id' to be a non-empty string");

      expect(cb).toThrowError(err);
    });
  });
 });
