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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 功能展示
### 【登录注册】
服务端通过 nestjs 的 【auth 模块、local strategy模块、jwt strategy模块】实现【认证、token、权限控制】
![image](https://user-images.githubusercontent.com/81945205/154099581-fb8bd5c5-a666-467c-9644-088e5bb50986.png)

### 【Snippet列表展示】
展示界面分由 【snippetList、userList、tagsCould、chart、sideBar、header】 构成，界面为响应式，会根据屏幕 【大、中、小】自动调整布局（大屏时候所有模块都显示，中屏的时候chart隐藏，小屏的时候chart、tagscloud、userlist都隐藏）
![image](https://user-images.githubusercontent.com/81945205/154102875-2f0fffc8-9256-4f25-97ed-99af71d25799.png)

### 【config 整体配置】
负责和 snippet 有关的主题、布局等全局配置
![image](https://user-images.githubusercontent.com/81945205/154104986-82695902-4c31-4d74-bafe-7e3ef5584e16.png)

### 【snippet 查看】
查看具体的一篇 snippet，由【snippet详情、评论组件、用户信息组件】 构成！响应式！
![image](https://user-images.githubusercontent.com/81945205/154105125-dcf7bd52-5bfd-48f4-90a1-a49cb88a7d81.png)

