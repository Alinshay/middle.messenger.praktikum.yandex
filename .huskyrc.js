module.exports = {
    hooks: {
        'pre-commit': 'npm run test && npm run eslint && npm run stylelint'
    }
}
