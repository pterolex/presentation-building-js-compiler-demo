const chalk       = require('chalk');
const parser      = require('./parser/parser');
const transformer = require('./transformer/transformer');
const generator   = require('./generator/generator');

exports.compile = function(source) {
    console.log('SOURCE: ', chalk.yellow(source));

    const ast            = parser.parse(source);
    const transformedAst = transformer.transform(ast);
    const jsSource       = generator.generate(transformedAst);

    console.log(`JAVASCRIPT: \n${chalk.green(jsSource)}`);

    return ast;
};
