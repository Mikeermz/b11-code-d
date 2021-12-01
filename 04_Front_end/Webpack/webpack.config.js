const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {

    module: {

        rules: [
            {
                //put the loaders here!!

                test: '/\.html$',  //search all the .html files
                use: [
                    {
                        loader: "html-loader",
                        options: {minimize : true}
                    }
                ]
            }
           
            
        ]
        
    },

  
    plugins: [
        //loading the plugins
        new HtmlWebpackPlugin( {
            template: "./src/index.html",
            inject: true,
            chunks: ['index'],
            filename: 'index.html'
        }),

      
        new HtmlWebpackPlugin({
            template: './src/main.html',
            inject: true,
            chunks: ['main'],
            filename: 'main.html'
        }),

    ]
}