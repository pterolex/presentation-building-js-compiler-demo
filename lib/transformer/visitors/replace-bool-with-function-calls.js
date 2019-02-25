const operatorToFunctionMapping = {
    '||': 'OR',
    '&&': 'AND',
};

function generateCallExpression(functionName, left, right) {
    return {
        type: 'ExpressionStatement',
            expression: {
            type: "CallExpression",
                callee: {
                type: "Identifier",
                name: functionName
            },
            arguments: [
                left,
                right
            ]
        }
    }
}


module.exports = {
    LogicalExpression(path) {
        const functionName = operatorToFunctionMapping[path.node.operator]

        path.replaceWith(
            generateCallExpression(functionName, path.node.left, path.node.right)
        );
    },
    UnaryExpression(path) {
        if (path.node.operator === '!') {
            path.replaceWith(
                generateCallExpression('NOT', path.node.argument)
            );
        }
    }
};
