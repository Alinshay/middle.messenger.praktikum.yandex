const Handlebars = require('handlebars/runtime')

Handlebars.registerHelper('isData', (value) => value === 'data')
Handlebars.registerHelper('isPassword', (value) => value === 'password')
Handlebars.registerHelper('isInput', (value) => value === 'input')
Handlebars.registerHelper('isText', (value) => value === 'text')
Handlebars.registerHelper('isButton', (value) => value === 'button')

module.exports = Handlebars
