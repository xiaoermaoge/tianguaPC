// 引用公共的html元素
// 引入fs处理模块
var fs = require('fs');
var src= 'import', filename = 'header.html';
var fnImportExample = function (src,filename) {
    // 读取HTML页面数据
    //使用api 文档中的 fs.readFile(filname,[options],callback)
    fs.readFile(src+'/'+filename,{
        // 需要指定编码方式，否则返回buffer
        encoding: 'utf8'
    },function (err,data) {
        // 把<link rel="import" href="header.html"> 替换成文件内容
    })
}