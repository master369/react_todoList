// module.exports = {};
module.exports = {
    module: {
        loaders: [
            { test: /\\.jsx?$/, loader: 'babel', exclude: ['node_modules'] },
            { test: /\\.css$/, loader: "style-loader!css-loader" },
            { test: /\\.scss$/, loader: ["style-loader", "css-loader", "sass-loader"] },
            { test: /\\.gif$/, loader: "url-loader" },
            { test: /\\.(ttf|eot|svg)$/, loader: "file-loader" },
        ]
    }
}