const express = require('express')
const webpack = require('webpack')
const config = require('./webpack.config.js')
const webpackDevMiddleware = require('webpack-dev-middleware')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000

const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
)

app.use(express.static('dist'))

app.use('/*', (req, res) => {res.sendFile( path.resolve(__dirname, 'dist/index.html'))})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`)
})
