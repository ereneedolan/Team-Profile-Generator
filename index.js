const inquirer = require('inquirer');
const fs = require('fs')
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

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
        generateHTML()
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
   
   function generateHTML(){
    let htmlString = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
    </head>
    <body>
        
    </body>
    </html>`


    for(const employee of team){
        const role = employee.getRole(); 
        // generate html card

        htmlStr+=
                `<div class="card has-background-white-ter">
                    <header class="card-header is-flex is-flex-direction-column has-background-info pl-3">
                        <h2 class="card-header-title has-text-white is-size-3 pb-0 ">${employee.getName()}</h2>
                        <h2 class="card-header-title has-text-white is-size-3 pb-0 ">${employee.getName()}</h2>
                        <h2 class="card-header-title has-text-white is-size-3 pb-0 ">${employee.getName()}</h2>
                        `
        // always display id, name, email
        
        // if role = manager
        //    display coffeee mug icon <i class="fa-solid fa-mug-hot"></i>
        //    display office number
    
        // if role = engineer
        //    display glasses icon <i class="fa-solid fa-glasses-round"></i>
        //    display github username, which is link to github page https://www.github.com/username
        
        // if role = intern
        //    display scholar icon <i class="fa-solid fa-user-graduate"></i>
        //    display school



    }
  
  fs.writeFileSync("dist/index.html", htmlString)
}