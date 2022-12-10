const generateHTML = (team) => {
let employeeList = ''    

for (let i=0; i<team.length; i++){
    let employee = team[i]
    let lastH2 = ''
    if (employee.getRole() === 'Manager') {
        lastH2= employee.officeNumber
    } 

    else if (employee.getRole()=== 'Engineer') {
        lastH2= employee.github
    }

    else if (employee.getRole() === 'Intern'){
        lastH2= employee.school
    }
    let employeeCard = `<div class="card has-background-white-ter">
    <header class="card-header is-flex is-flex-direction-column has-background-info pl-3">
        <h2 class="card-header-title has-text-white is-size-3 pb-0 ">${employee.getName()}</h2>
        <h2 class="card-header-title has-text-white is-size-3 pb-0 ">${employee.getEmail()}</h2>
        <h2 class="card-header-title has-text-white is-size-3 pb-0 ">${employee.getId()}</h2>
        <h2 class="card-header-title has-text-white is-size-3 pb-0 ">${lastH2}</h2>
    </header>
    </div>   
    `  
    

employeeList = employeeList + employeeCard 
}

let htmlString = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
    </head>
    <body>
        ${employeeList}
    </body>
    </html>`

    return htmlString 

}

module.exports = generateHTML