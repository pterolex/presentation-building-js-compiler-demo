const fs        = require('fs')
const {docopt}  = require('docopt');
const compiler = require('../lib/compiler');

const doc =  `
    Usage:
       compiler.js --src=<src> [--dst=<dst>]
       compiler.js -h | --help

    Options:'
       -h --help               Show this screen.
       -s --src <src>          Source HAL code.
       -d --dst <dst>          Destination JS code.`;

const opts = docopt(doc);
const src  = opts['--src'];
const dst  = opts['--dst'];

function main(){
    const source = fs.readFileSync(src, 'utf-8');
    const compiledJSCode = compiler.compile(source);

    if (dst) {
        fs.writeFileSync(dst, `// Compiled from '${source}'\n`);
        fs.appendFileSync(dst, compiledJSCode);
    } else {
        console.log(compiledJSCode);
    }
}

main();
