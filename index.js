const program = require('commander');
const { prompt } = require('inquirer');
const { generateComponent } = require('./lib/generateComponent');
const { build } = require('./lib/build');
const { info } = require('./lib/info');
const { run } = require('./lib/run');

// Basics
program
    .version('0.8.0')
    .description(`MCCOM Universal Command Line Interface which helps you
    to make project faster, easier and with a lot of fun`)
    .option('-g, --generate', 'Add component with ready-to-go .ts, .scss and .tpl files')
    .option('-b, --build', 'Build front')
    .option('-i, --info', 'Show info and basic commands')
    .option('--init', 'Initialize project')
    .option('-r, --run', 'Open project in localhost with livereload')
    .option('-c, --config','Configure this CLI')


// Generate component
program
    .command(`generate <name>`)
    .alias('g')
    .description('Generate a component to your project')
    .action(generateComponent(name))

// Build
program
    .command('build')
    .alias('b')
    .description('Build front')
    .action(build)

// Info
program
    .command(`info`)
    .alias('i')
    .description('Show basic info')
    .action(info)

// Run
program
    .command(`run`)
    .alias('r')
    .description('Run project in localhost with livereload enabled')
    .action(run)


program.parse(process.argv);
