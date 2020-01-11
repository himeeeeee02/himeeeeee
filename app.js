const yargs = require('yargs');

yargs.version('1.0.0');

yargs.command({
    command: 'list',
    describe: 'list all todo',
    handler(){
        console.log(chalk.yellow.bgBlue('Listing...'));
    }
});

const argv = yargs.argv;
// console.log(argv);