// name
// id
// email 
// getName()
// getId()
// getEmail()
// getRole() - returns "employee"
// github - github username
// getGithub()
// getRole() overriden to return "Engineer"

const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an object with a name, age, id and office number if provided valid arguments", () => {
        const name = "Eileen"
        const email = "eileenrdolan@gmail.com"
        const id = "001"
        const github = "ereneedolan"
      
        const intern = new Engineer(name, email, id, github);

        expect(intern.name).toEqual(name);
        expect(intern.email).toEqual(email);
        expect(intern.id).toEqual(id);
        expect(intern.github).toEqual(github);

    });

    it("should throw an error if provided no arguments", () => {
      const cb = () => new Engineer();

      expect(cb).toThrow();
    });

    it("should throw an error if not provided an name", () => {
        const name = ""
        const email = "eileenrdolan@gmail.com"
        const id = "001"
        const github = "ereneedolan"
        const cb = () => new Engineer(name, email, id, github);
        const err = new Error("Expected parameter 'name' to be a non-empty string");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if not provided an email", () => {
        const name = "Eileen"
        const email = ""
        const id = "001"
        const github = "ereneedolan"
        const cb = () => new Engineer(name, email, id, github);
        const err = new Error("Expected parameter 'email' to be a non-empty string");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if not provided an id", () => {
        const name = "Eileen"
        const email = "eileenrdolan@gmail.com"
        const id = ""
        const github = "ereneedolan"
        const cb = () => new Engineer(name, email, id, github);
        const err = new Error("Expected parameter 'id' to be a non-empty string");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if not provided a github", () => {
        const name = "Eileen"
        const email = "eileenrdolan@gmail.com"
        const id = "001"
        const github = ""
        const cb = () => new Engineer(name, email, id, github);
        const err = new Error("Expected parameter 'github' to be a non-empty string");

      expect(cb).toThrowError(err);
    });
});

describe("getName()", () => {
    it("should always return type 'name'", ()=>{
        const name = "Eileen"
        const email = "eileenrdolan@gmail.com"
        const id = "001"
        const github = "ereneedolan"

        const employee = new Engineer(name, email, id, github);

        expect(employee.getName()).toEqual(name);
    })
})

describe("getEmail()", () => {
    it("should always return type 'email'", ()=>{
        const name = "Eileen"
        const email = "eileenrdolan@gmail.com"
        const id = "001"
        const github = "ereneedolan"
        const employee = new Engineer(name, email, id, github);

        expect(employee.getEmail()).toEqual(email);
    })
})

describe("getId()", () => {
    it("should always return type 'id'", ()=>{
        const name = "Eileen"
        const email = "eileenrdolan@gmail.com"
        const id = "001"
        const github = "ereneedolan"
        const employee = new Engineer(name, email, id, github);

        expect(employee.getId()).toEqual(id);
    })
})

describe("getgithub()", () => {
  it("should always return type 'github'", ()=>{
      const name = "Eileen"
      const email = "eileenrdolan@gmail.com"
      const id = "001"
      const github = "ereneedolan"
      const employee = new Engineer(name, email, id, github);

      expect(employee.getgithub()).toEqual(github);
  })
})

describe("getRole()", () => {
    it("should always return type 'Engineer'", ()=>{
        const name = "Eileen"
        const email = "eileenrdolan@gmail.com"
        const id = "001"
        const github = "ereneedolan"

        const employee = new Engineer(name, email, id, github);

        expect(employee.getRole()).toEqual('Engineer');
    })
})
    
});
