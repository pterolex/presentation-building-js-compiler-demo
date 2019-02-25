const peg = require('pegjs');
const fs  = require('fs');

const grammarName = 'words-demo-babel.peg';
// const grammarName = 'words-demo.peg';

const parse = function(source) {
    const grammar = fs.readFileSync(`${__dirname}/lib/${grammarName}`, 'utf8' );

    const parser = peg.generate(grammar);

    fs.writeFileSync(`${__dirname}/dist/${grammarName}`, parser.parse.toString());

    return parser.parse(source);
}

module.exports = {
    parse
};