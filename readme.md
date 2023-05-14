运行dist文件
方式1
（1）、安装一个服务
npm install http-server -g 
（2）、然后在dist文件下执行：
http-server

方式2
publicPath:  './', //默认是'',修改为'./',使用相对路径，这样就表示全部的assets资源路径用相对路径
可能还需要修改路由的配置方式后面补充
