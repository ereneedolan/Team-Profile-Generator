const inquirer = require('inquirer');
const fs = require('fs')
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const generateHTML = require('./dist/generateHTML')

let team=[];

inquirer
  .prompt([
    {
      type: 'input',
      message: `What is the manager's name?`,
      name: 'name',
    },
    {
      type: 'input',
      message: `What is the their email address?`,
      name: 'email',
    },
    {
      type: 'input',
      message: `What is their ID number?`,
      name: 'id',
    },
    {
      type: 'choice',
      message: `What is their office number?`,
      name: 'officeNumber',
      },
    ])
    .then (({name, email, id, officeNumber}) => {
      team.push(new Manager(name, email, id, officeNumber))
     buildTeam() 
    })

function buildTeam(){
  inquirer
  .prompt([
    {
      type: 'list',
      message: `What would you like to do next?`,
      name: 'choice',
      choices: [
        "add an engineer",
        "add an intern",
        "team is complete"
      ]
    }
    ])
    .then (({choice}) => {
      if(choice === "add an engineer"){
        addEngineer()
      }else if(choice === "add an intern"){
        addIntern()
      }else {
        writeHTML()
      }
    })
}

function addEngineer(){
  inquirer
  .prompt([
    {
      type: 'input',
      message: `What is the engineer's name?`,
      name: 'name',
    },
    {
      type: 'input',
      message: `What is their email address?`,
      name: 'email',
    },
    {
      type: 'input',
      message: `What is their ID number?`,
      name: 'id',
    },
    {
      type: 'choice',
      message: `What is their github username?`,
      name: 'github',
      },
    ])
    .then (({name, email, id, github}) => {
      team.push(new Engineer(name, email, id, github))
     buildTeam() 
    
    })
}
function addIntern(){
  inquirer
  .prompt([
    {
      type: 'input',
      message: `What is the intern's name?`,
      name: 'name',
    },
    {
      type: 'input',
      message: `What is their email address?`,
      name: 'email',
    },
    {
      type: 'input',
      message: `What is their ID number?`,
      name: 'id',
    },
    {
      type: 'choice',
      message: `What is their school?`,
      name: 'school',
      },
    ])
    .then (({name, email, id, school}) => {
      team.push(new Intern(name, email, id, school))
     buildTeam() 
    
    })
}
    // Prompt for Manager info
    // name, email, id, #
    // create manager object
    // push to employee array

    // Prompt user with a list of choices until he selects finished
    // for each choice prompt for id, name, email, and based on choice either github or school, create object, push top employee array
    // Build Html string from employees array
    // write html string to ./dist/index.html  
   // generate HTML string (HTML) with data from employees array  
   
   function writeHTML(){
    fs.writeFileSync("dist/index.html", generateHTML(team))
   }


    // for(const employee of team){
    //     const role = employee.getRole(); 
    //     // generate html card

   
  
  
