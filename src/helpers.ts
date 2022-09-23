const Handlebars = require('handlebars/runtime')

Handlebars.registerHelper('isData', (value: string) => value === 'data')
Handlebars.registerHelper('isPassword', (value: string) => value === 'password')
Handlebars.registerHelper('isInput', (value: string) => value === 'input')
Handlebars.registerHelper('isText', (value: string) => value === 'text')
Handlebars.registerHelper('isButton', (value: string) => value === 'button')
