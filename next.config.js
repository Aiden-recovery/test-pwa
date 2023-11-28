const {InjectManifest} = require('workbox-webpack-plugin');

module.exports = {
    webpack: (config, options) => {
        config.plugins.push(new InjectManifest({
            swSrc: 'service-worker.js',
            swDest: '../public/service-worker.js',
        }))

        return config
    },
}
