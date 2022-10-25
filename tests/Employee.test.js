
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

//     it("should throw an error if not provided an age", () => {
//       const cb = () => new Employee("Eileen");
//       const err = new Error("Expected parameter 'age' to be a non-negative number");

//       expect(cb).toThrowError(err);
//     });

//     it("should throw an error if 'name' is not a string", () => {
//       const cb = () => new Employee(3, 2);
//       const err = new Error("Expected parameter 'name' to be a non-empty string");

//       expect(cb).toThrowError(err);
//     });

//     it("should throw an error if 'age' is not a number", () => {
//       const cb = () => new Employee("Sarah", "2");
//       const err = new Error("Expected parameter 'age' to be a non-negative number");

//       expect(cb).toThrowError(err);
//     });

//     it("should throw an error if 'age' is less than 0", () => {
//       const cb = () => new Employee("Sarah", -1);
//       const err = new Error("Expected parameter 'age' to be a non-negative number");

//       expect(cb).toThrowError(err);
//     });
  });
 });
