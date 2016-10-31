const inquirer = require('inquirer');
const argv     = require('yargs').argv;

const addPage = require('../../services/addPage');


module.exports = function(gulp, callback) {
    if (argv.n) {
        addPage(argv.n, argv.r.split(','));
        callback();
    } else {
        inquirer.prompt([{
            type: 'input',
            message: 'What is the name of the page?',
            name: 'name'
        }, {
            type: 'input',
            message: 'What resolves will the page need?',
            name: 'name'
        }], function(res) {
            addPage(res.name, res.resolves.split(','));
            callback();
        });
    }
};