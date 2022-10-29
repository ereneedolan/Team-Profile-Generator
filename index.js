async function buildTeam(){
    // Prompt for Manager info
    //  name, email, id, #
    // create manager object
    // push to employee array

    // Prompt user with a list of choices until he selects finished
    //   for each choice prompt for id, name, email, and based on choice either github or school, create object, push top employee array
    // Build Html string from employees array
    // write html string to ./dist/index.html  

    const employees = [];

    const managerName = await promptInput("Please Enter the Manager's Name:", true), 
    const managerEmail = await promptInput("Please Enter the Manager's Name:", true); 
    const managerOfficeNumber = await promptInput("Please Enter the Manager's Name:", true); 

    const manager = new Manager(managerName, managerEmail, managerOfficeNumber);
     
    employees.push(manager);

    let choice = '';
    while (choice !== 'Finished'){
            choice = await promptList("\nWhich team member would you like to add to the team?",   ['Engineer', 'Intern', 'Finished']);

            if (choice === 'Engineer'){
                const engineerName = await promptInput("Please Enter the Manager's Name:", true), 
                const engineerEmail = await promptInput("Please Enter the Manager's Name:", true); 
                const engineerGitHub = await promptInput("Please Enter the Manager's Name:", true); 

                const engineer = new Engineer(engineerName, managerEmail, engineerGitHub);

                employees.push(engineer);
            } 
        }

    // generate HTML string (HTML) with data from employees array    
    let htmlString = '!<DOCTypeslkdlskdlsklds';
    for(const employee of employees){
        const role = employee.getRole(); 
        // generate html card
        // always display id, name, email
        //
        // if role = manager
        //    display coffeee mug icon
        //    display office number
        //
        // if role = engineer
        //    display glasses icon
        //    display github username, which is link to github page https://www.github.com/username
        //
        // if role = intern
        //    display scholar icon
        //    display school

        htmlStr+=
                `<div class="card has-background-white-ter">
                    <header class="card-header is-flex is-flex-direction-column has-background-info pl-3">
                        <h2 class="card-header-title has-text-white is-size-3 pb-0 ">${employee.getName()}</h2>
                        <h2 class="card-header-title has-text-white is-size-5 pt-0">`;

        
    }


    // write HTML string to file ./dist/index.html

};

buildTeam();