module.exports={
    entry:'./src/js/entry.js',
    output:{
        filename:'index.js',
        path:__dirname + '/out'
    },
    module:{
        rules:[
            {
                test:/.js$/,
                use:['babel-loader']
            },
            {
                test:/.css$/,
                use:['style-loader','css-loader']
            },
            {test: /.css$/, use: ExtractTextPlugin.extract({fallback: 'style-loader',use: 'css-loader'})},
            {
                test:/.(jpg|png|gif|svg)$/,
                use:['url-loader?limit=8192&name=./[name].[ext]']
            },
            {
                test:/.less$/,
                use:['style-loader','css-loader','less-loader']
            }
        ]
    }
}