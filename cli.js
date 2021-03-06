#!/usr/bin/env node

const arrayTreefy = require('./')
const meow = require('meow')
const chalk = require('chalk')

const logger = console

module.exports = (async () => {
	const cli = meow(`
        ${chalk.yellow('Usage')}
            $ array-treefy

        ${chalk.yellow('Options')}
            --help,     -h  Get help
            --version,  -v  Get version

        ${chalk.yellow('Examples')}
            $ array-treefy
            $ array-treefy --help
            $ array-treefy --version
    `)

	if (cli.input.length) {
		if (cli.input[0] === ('version' || '--version' || '--v' || '-v')) {
			const pkg = require('./package')
			logger.log(`${pkg.name} version ${chalk.green(`v${pkg.version}`)}`)
		} else {
			logger.log(arrayTreefy(JSON.parse(cli.input[0]), cli.flags.label))
		}
	} else {
		logger.log(chalk.red('Invalid argument'))
	}

})()
