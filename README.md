## 2019-nCoV-疫情可视化-react版本
> 希望疫情能早日过去！

> 线上地址：[疫情实时预览工具](http://xieyezi.com:9001)

看见了许多大佬都在写疫情可视化工具，所以我也按耐不住了。希望能为疫情的防控做出一点点微薄的贡献。

## 功能
 - [x] 人数情况查看
 - [x] 全国和各省市疫情地图及其详细信息查看
 - [x] 最新消息
 - [x] 造谣信息
 - [x] 疫情趋势
 - [x] 死亡率和治愈率



## 预览
 <br />
<div text="center">
 <img width="48%" src="https://i.loli.net/2020/02/07/DEQlkAiw3MJ1Z9z.png"/>
 <img width="48%" src="https://i.loli.net/2020/02/07/dWiA1jsyl56HMkF.png"/>
 <img width="48%" src="https://i.loli.net/2020/02/05/fcIAbX6StMsz8Lv.png"/>
 <img width="48%" src="https://i.loli.net/2020/02/05/8NXTyZkaUw1qs46.png"/>
 <img width="48%" src="https://i.loli.net/2020/02/05/LxlPgn1wQHAER5q.png"/>
 <img width="48%" src="https://i.loli.net/2020/02/05/F1HbnVfWhwogyDX.png"/>
</div> 
 <br />


## 快速开始
- clone项目: git clone https://github.com/xieyezi/2019-nCoV-Virus.git
- 安装依赖: cd 2019-nCoV-Virus && yarn install
- 运行: yarn start
- 打包: yarn build
- 运行打包文件: yarn global add serve && serve build

## 部署
通过docker的Dockerfile文件制作为镜像，然后通过nginx来进行部署。
Dockerfile:
```
# ncov Dockerfile

#指定node镜像对项目进行依赖安装和打包
FROM node:10.16.0 AS builder
# 将容器的工作目录设置为/app(当前目录，如果/app不存在，WORKDIR会创建/app文件夹)
WORKDIR /app 
COPY package.json /app/ 
RUN npm config set registry "https://registry.npm.taobao.org/" \
    && npm install
 
COPY . /app   
RUN npm run build 

#指定nginx配置项目，--from=builder 指的是从上一次 build 的结果中提取了编译结果(FROM node:alpine as builder)，即是把刚刚打包生成的dist放进nginx中
FROM nginx
COPY --from=builder app/build /usr/share/nginx/html/
COPY --from=builder app/nginx.conf /etc/nginx/nginx.conf


#暴露容器80端口
EXPOSE 80
```



## 数据来源
 - [天行数据-抗击肺炎](https://www.tianapi.com/apiview/169)
 - [地图Json](https://github.com/huanent/vue-echarts-map-demo)
 - [疫情发展趋势折线图](https://github.com/BlankerL/DXY-2019-nCoV-Crawler)

 在此特地鸣谢！  
 希望武汉疫情能够早日过去！
  
