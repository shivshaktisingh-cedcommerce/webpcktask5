const path=require('path')
module.exports={
    mode:"development",
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname , 'dist'),
        filename:"output.js"
    }  ,
    devServer:{
        static:{
            directory:path.resolve(__dirname , 'dist'),
        } ,
        port:4500 ,
        open:true ,
        hot:true ,
        compress:true ,
        historyApiFallback:true , 
        
    } ,
    module:{
        rules:[
            {
                test:/\.css$/ ,
                use:["style-loader", "css-loader"] ,
               
            }
        ]
    }
  
}