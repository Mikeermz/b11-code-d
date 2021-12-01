npm init -y
 npm i webpack webpack-cli --save--dev
 ->package.json
     "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev" : "webpack --mode development",
    "prod" : "webpack --mode production"},

    //html loader
    npm i html-webpack-plugin html-loader --save-dev

    //webpack.config
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
            filename: 'index.html'
        })

    ]
}
//install live server
npm i webpack-dev-server

//create webpack.dev.js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  // https://webpack.js.org/concepts/entry-points/#multi-page-application
  entry: {
    index: './src/index.js'
  },

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    port: 9080
  },

  // https://webpack.js.org/concepts/plugins/
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
    })
  ]
};

//package.json
"start": "webpack-dev-server --config webpack.dev.js --mode production"
//execute
npm run start