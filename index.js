const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

const main = async () => {
    const questions = [
        {
            type: 'input',
            name: 'text',
            message: 'Enter text for the logo (up to 3 characters):',
            validate: input => {
                if (input.length <= 3) return true;
                return 'Please enter up to 3 characters only.';
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color (keyword or hex):',
            default: 'black'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['Triangle', 'Circle', 'Square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color (keyword or hex):',
            default: 'black'
        }
    ];
    
    const answers = await inquirer.prompt(questions);

    let shapeInstance;
    switch (answers.shape) {
        case 'Triangle':
            shapeInstance = new Triangle();
            break;
        case 'Circle':
            shapeInstance = new Circle();
            break;
        case 'Square':
            shapeInstance = new Square();
            break;
    }

    shapeInstance.setColor(answers.shapeColor);

    const svgContent = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeInstance.render()}
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="40" fill="${answers.textColor}">${answers.text}</text>
      </svg>
    `;

    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
};

main();
