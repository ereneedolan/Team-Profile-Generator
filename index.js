

constructor()
this.employees
this.html

this.employees.push(new Manager)

fs.writeFile('./dist/index.html', team.getHTML(), (err=> {
    if (err)
        console.log(err);
    else ;    
}))

#buildHTML(){
    let htmlStr = '';
    htmlStr+=
    `<!DOCTYPE html>
        <html lang"en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
            <title>Team Profile Generator</title>
    </head>
    <body>
        <section>
            <div>
                <h1>
                </h1>
            </div>
        </section>
    
    
    </body>        
    
    `

    let choice = '';
    while (choice !== 'Team Complete'{
        choice = await promptList("/nWhich team member would you like to add to the team?",['Engineer', 'Intern', 'Team Complete']);
    })

    if choice(==='Engineer'){
        this.employees.psuh(new Engingeer(
            await promptInput("Please enter the Engineer's Name:", true),
            await promptInput("Please enter the Engineer's Email:", true),
            await promptInput("Please enter the Engineer's Github username:", true)));
        console.log(
            (`\nIntern added successfully!\n`)+
            (`$this.employees.at(-1).tostring()}\n`));
    }
    else if(choice ==='Intern'){
        this.employees.psuh(new Engingeer(
            await promptInput("Please enter the Intern's Name:", true),
            await promptInput("Please enter the Intern's Email:", true),
            await promptInput("Please enter the Interns school name:", true)));
        
        console.log(
            (`\nIntern added successfully!\n`)+
            (`$this.employees.at(-1).tostring()}\n`));
    
    } else break;
    this.html = this.buildHTML();

}
getEmployees({
    return this.employees
})