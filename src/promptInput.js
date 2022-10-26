// inquirer package
const inquirer = require('inquirer')

const promptInput = function (message, required = false){
    return inquirer.prompt([{
        name: "val",
        type: "input",
        message: message,
        validate: input => (input.length > 0 || !required) || 'This is a required field.'
    }])
    .then(answer => answer.val);
}

// make it available
module.exports = promptInput;