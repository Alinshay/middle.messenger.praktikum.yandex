const colors = require('./src/colors')

module.exports = {
    plugins: [
      require('postcss-simple-vars')({ variables: colors })
    ]
}