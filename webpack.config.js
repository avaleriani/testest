var Path = require('path');
var webpack = require('webpack');
module.exports = {
    cache: true,
    debug: true,
    devtool: 'eval',
    entry: './js/app.js',
    output: {
        path: Path.join(__dirname, "js"),
        filename: './build.min.js'
    },
    resolve: {
        extensions: ['', '.js', '.json'],
        root: [Path.join(__dirname, "node_modules")],
        modulesDirectories: ['node_modules'],
            alias: {
                "ScrollMagic": Path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
                "animation.velocity": Path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.velocity.js'),
                "velocity": Path.resolve('node_modules', 'velocity-animate/velocity.min.js'),
                "debug.addIndicators" :Path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
            }
    }
};