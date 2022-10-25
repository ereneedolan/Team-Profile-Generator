// name
// id
// email 
// getName()
// getId()
// getEmail()
// getRole() - returns "employee"
// school
// getSchool()
// getRole() - overriden to return "Intern"

const Intern = require("../lib/Intern.js");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with a name, age, id and office number if provided valid arguments", () => {
        const name = "Eileen"
        const email = "eileenrdolan@gmail.com"
        const id = "001"
        const school = "Columbia"
      
        const intern = new Intern(name, email, id, school);

        expect(intern.name).toEqual(name);
        expect(intern.email).toEqual(email);
        expect(intern.id).toEqual(id);
        expect(intern.school).toEqual(school);

    });

    it("should throw an error if provided no arguments", () => {
      const cb = () => new Intern();

      expect(cb).toThrow();
    });

    it("should throw an error if not provided an name", () => {
        const name = ""
        const email = "eileenrdolan@gmail.com"
        const id = "001"
        const school = "Columbia"
        const cb = () => new Intern(name, email, id, school);
        const err = new Error("Expected parameter 'name' to be a non-empty string");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if not provided an email", () => {
        const name = "Eileen"
        const email = ""
        const id = "001"
        const school = "Columbia"
        const cb = () => new Intern(name, email, id, school);
        const err = new Error("Expected parameter 'email' to be a non-empty string");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if not provided an id", () => {
        const name = "Eileen"
        const email = "eileenrdolan@gmail.com"
        const id = ""
        const school = "Columbia"
        const cb = () => new Intern(name, email, id, school);
        const err = new Error("Expected parameter 'id' to be a non-empty string");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if not provided a school", () => {
        const name = "Eileen"
        const email = "eileenrdolan@gmail.com"
        const id = "001"
        const school = ""
        const cb = () => new Intern(name, email, id, school);
        const err = new Error("Expected parameter 'school' to be a non-empty string");

      expect(cb).toThrowError(err);
    });
});

describe("getName()", () => {
    it("should always return type 'name'", ()=>{
        const name = "Eileen"
        const email = "eileenrdolan@gmail.com"
        const id = "001"
        const school = "Columbia"

        const employee = new Intern(name, email, id, school);

        expect(employee.getName()).toEqual(name);
    })
})

describe("getEmail()", () => {
    it("should always return type 'email'", ()=>{
        const name = "Eileen"
        const email = "eileenrdolan@gmail.com"
        const id = "001"
        const school = "Columbia"
        const employee = new Intern(name, email, id, school);

        expect(employee.getEmail()).toEqual(email);
    })
})

describe("getId()", () => {
    it("should always return type 'id'", ()=>{
        const name = "Eileen"
        const email = "eileenrdolan@gmail.com"
        const id = "001"
        const school = "Columbia"
        const employee = new Intern(name, email, id, school);

        expect(employee.getId()).toEqual(id);
    })
})

describe("getSchool()", () => {
  it("should always return type 'school'", ()=>{
      const name = "Eileen"
      const email = "eileenrdolan@gmail.com"
      const id = "001"
      const school = "Columbia"
      const employee = new Intern(name, email, id, school);

      expect(employee.getSchool()).toEqual(school);
  })
})

describe("getRole()", () => {
    it("should always return type 'Intern'", ()=>{
        const name = "Eileen"
        const email = "eileenrdolan@gmail.com"
        const id = "001"
        const school = "Columbia"

        const employee = new Intern(name, email, id, school);

        expect(employee.getRole()).toEqual('Intern');
    })
})
    
});
