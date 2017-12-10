开发依赖
npm install webpack webpack-dev-server babel-core babel-loader babel-preset-es2015 babel-preset-react css-loader style-loader file-loader url-loader html-webpack-plugin -D
npm install babel-preset-stage-0 -D
npm install react react-dom bootstrap -S


生产依赖
npm install react react-dom

es2015 编译es6
stage-0 编译es7

style-loader 变成内嵌样式

names.map((item, index)=>(
                <li key={index}>{item}</li>
            ))
 == 
names.map((item, index)=>{
                return <li key={index}>{item}</li>
            })


上传静态文件到服务器 -r遍历文件 baidu是本地文件夹
scp -r baidu root@114.215.26.54:/var/www/html

