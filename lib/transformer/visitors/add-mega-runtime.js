
module.exports = {
    Program(path) {
        const megaRuntimeAst = {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "ObjectPattern",
                        "properties": [
                            {
                                "type": "ObjectProperty",
                                "method": false,
                                "key": {
                                    "type": "Identifier",
                                    "name": "AND"
                                },
                                "computed": false,
                                "shorthand": true,
                                "value": {
                                    "type": "Identifier",
                                    "name": "AND"
                                },
                                "extra": {
                                    "shorthand": true
                                }
                            },
                            {
                                "type": "ObjectProperty",
                                "method": false,
                                "key": {
                                    "type": "Identifier",
                                    "name": "OR"
                                },
                                "computed": false,
                                "shorthand": true,
                                "value": {
                                    "type": "Identifier",
                                    "name": "OR"
                                },
                                "extra": {
                                    "shorthand": true
                                }
                            },
                            {
                                "type": "ObjectProperty",
                                "method": false,
                                "key": {
                                    "type": "Identifier",
                                    "name": "NOT"
                                },
                                "computed": false,
                                "shorthand": true,
                                "value": {
                                    "type": "Identifier",
                                    "name": "NOT"
                                },
                                "extra": {
                                    "shorthand": true
                                }
                            }
                        ]
                    },
                    "init": {
                        "type": "CallExpression",

                        "callee": {
                            "type": "Identifier",
                            "name": "require"
                        },
                        "arguments": [
                            {
                                "type": "StringLiteral",
                                "value": "../megaRuntime"
                            }
                        ]
                    }
                }
            ],
            "kind": "const"
        }

        path.node.body.unshift(
            megaRuntimeAst
        );
    }
};
