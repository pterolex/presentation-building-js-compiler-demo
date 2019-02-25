// Compiled from '(NOT true) OR ( false AND (false OR true) )'
require("../boolRuntime");

console.log(OR(NOT(true, ), AND(false, OR(false, true))))