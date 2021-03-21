const fs = require('fs');

const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [Name, github] = profileDataArgs;




fs.writeFile('index.html', generatePage(Name, github), err => {
    if (err) throw err;

    console.log('Porfolio complete! Check out index.html to see the output!')
});