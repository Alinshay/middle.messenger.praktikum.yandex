module.exports = api => {

    if(api.env('test')) {
        api.cache.never()
        const presets = [
            "@babel/preset-typescript",
            "@babel/preset-env"
        ]

        const plugins = [
            "@babel/proposal-class-properties",
            "@babel/proposal-object-rest-spread"
        ]
        return { presets, plugins }
    }
    return {}
}
