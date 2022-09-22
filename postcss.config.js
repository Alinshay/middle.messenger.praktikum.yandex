const colors = require('./src/colors.ts')

module.exports = {
    plugins: [
      require('postcss-simple-vars')({ variables: colors })
    ]
}
