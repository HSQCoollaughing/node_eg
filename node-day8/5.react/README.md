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
));
 == 
names.map((item, index)=>{
    return <li key={index}>{item}</li>
});

如果新增加模块用yarn增加，，用npm会干掉webpack.cmd  npm的bug
yarn add prop-types


http://zhufengpeixun.coding.me/doc/html/%E6%9C%8D%E5%8A%A1%E5%99%A8/linux%E5%9F%BA%E7%A1%80.html 

http://zhufengpeixun.coding.me/doc/html/%E6%9C%8D%E5%8A%A1%E5%99%A8/linux%E5%B8%83%E7%BD%B2.html 

http://man.linuxde.net/vi 


