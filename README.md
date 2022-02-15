# snippet

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
## 整体介绍
  当初学习完 css、html、js、nodejs，mongoose之后，曾在没用任何框架的前提下尝试写了一个 snail 的博客网站（现在看来当然奇丑无比），但是那时还不知道 vue，前端框架和后端框架，之后马上便对 vue 感兴趣，于是打算用 vue 重写 snial 博客网站——snippet！
  
  snippet 只是对 vue 学习成果的实践，所以snippet 肯定会超过 snail 几倍，但是之后再回头看时，肯定不堪入目，然而重要的却是——实践！
  
  由于前端和后端都是本人从 0 开始撸出来的，两手抓的工作量确实使人顾而后怕
  
  
  ```
  前端使用 vue 框架
  
  后端使用 nestjs 框架
  
  参考：vue-element-admin
  ```
  
## 主要功能
### 【登录注册】
服务端通过 nestjs 的 【auth 模块、local strategy模块、jwt strategy模块】实现【认证、token、权限控制】
![image](https://user-images.githubusercontent.com/81945205/154106860-9d5f9804-05b4-4d63-8835-c93d273aa9fa.png)

### 【Snippet列表展示】
展示界面分由 【snippetList、userList、tagsCould、chart、sideBar、header】 构成，界面为响应式，会根据屏幕 【大、中、小】自动调整布局（大屏时候所有模块都显示，中屏的时候chart隐藏，小屏的时候chart、tagscloud、userlist都隐藏）
![image](https://user-images.githubusercontent.com/81945205/154105844-c147843d-4ec5-4f3f-a273-3098d19a7848.png)

### 【config 整体配置】
负责和 snippet 有关的主题、布局等全局配置
![image](https://user-images.githubusercontent.com/81945205/154105870-e288ec29-fd36-4e98-a86f-3a8d98fba833.png)

### 【snippet 查看】
查看具体的一篇 snippet，由【snippet详情、评论组件、用户信息组件】 构成！响应式！
![image](https://user-images.githubusercontent.com/81945205/154105908-6284eed4-cd2f-4977-96f5-76f7b8faec1e.png)

### 【snippet 新建】
由【tinymce、upload】模块组成，可以上传文章封面！
![image](https://user-images.githubusercontent.com/81945205/154105950-1eeee73c-0473-4bc7-81d6-629280fddef8.png)

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
