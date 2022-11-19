## 两种萜类化合物共表达的动态调控及其染色原理的展示

### 项目简介
```
核心知识展示：基于毕赤酵母内源MVA通路，构建工程菌株，使其能够同事生产广藿香醇和番茄红素。同时引入蓝光调控系统，利用可视化检测方法，实现两种萜类化合物的动态调控。

网页整体内容：主页面介绍了整个研究项目的基本过程，在其他页面主要有团队、工程、实验、安全、社会实践、评判等部分，每个部分还有若干子部分，具体结构如下所示：
│
├─ Home                  # 主页面
├─ TEAM                  # 关于团队
│  ├─ Members              # 成员介绍
│  ├─ Attributions         # 成员贡献
│  ├─ Collaboration        # 项目协作
│  └─ Partnership          # 合作伙伴
├─ PROJECT               # 关于工程
│  ├─ Description          # 工程描述
│  ├─ Contributions        # 各部分实验的贡献
│  ├─ Proof of Concept     # 结论证明
│  ├─ Implementation       # 实施成果
│  ├─ Parts                # 子部分总结
│  └─ Notebook             # 阶段总结
├─ LAB                   # 关于实验
│  ├─ Result               # 结果展示
│  ├─ Engineering          # 工程细节
│  └─ Modeling             # 建模细节
├─ SAFETY                # 关于安全
├─ HUMAN PRACTICE        # 关于实践
│  ├─ Overview             # 实践总览
│  ├─ Intergrated Human Practice  # 深入实践
│  ├─ Education & Communication   # 学习与交流
│  │  └─ Game                # 与项目内容相关的游戏
│  └─ Sustainable          # 可持续发展
└─ JUDGING               # 关于评判
```


### 项目部署
> 在线部署网址：https://zxtreme.github.io/iGem.github.io/
```
由于缺少服务器，在线部署的网站为摘除服务端的版本(即main-without-server分支中的版本)，具体区别为：
main分支的游戏部分需要登录注册，结合了node.js和mysql数据库；
main-without-server分支的游戏部分保留了登录界面(login.html页面)，但不进行任何后端操作，无需输入账号密码直接登录即可。
```
```
在线部署网站的游戏部分为关卡式，仅当通过当前关卡方可解锁下一关，若想一键解锁所有关卡，可通过 开发者工具→应用→本地存储空间→将total_barrier修改为12→将get修改为1,1,1,1,1,1,1,1,1,1(可选，用于解锁知识卡片)→重新刷新页面 ，即可完成一键解锁。
原因：摘除服务端后采用本地存储记录玩家的游戏进度。
```
> 可选择直接跳转到指定页面  
> 主页面： [Home](https://zxtreme.github.io/iGem.github.io/index.html)     
> 成员介绍： [Members](https://zxtreme.github.io/iGem.github.io/html/member.html)   
> 成员贡献： [Attributions](https://zxtreme.github.io/iGem.github.io/html/attributions.html)  
> 项目协作： [Collaboration](https://zxtreme.github.io/iGem.github.io/html/collaborations.html)  
> 合作伙伴： [Partnership](https://zxtreme.github.io/iGem.github.io/html/partnership.html)  
> 工程描述： [Description](https://zxtreme.github.io/iGem.github.io/html/description.html)  
> 各部分实验的贡献： [Contributions](https://zxtreme.github.io/iGem.github.io/html/contribution.html)  
> 结论证明： [Proof of Concept](https://zxtreme.github.io/iGem.github.io/html/proof-of-concept.html)  
> 实施成果： [Implementation](https://zxtreme.github.io/iGem.github.io/html/implementation.html)  
> 子部分总结： [Parts](https://zxtreme.github.io/iGem.github.io/html/parts.html)  
> 阶段总结： [Notebook](https://zxtreme.github.io/iGem.github.io/html/notebook.html)  
> 结果展示： [Result](https://zxtreme.github.io/iGem.github.io/html/result.html)  
> 工程细节： [Engineering](https://zxtreme.github.io/iGem.github.io/html/engineering.html)  
> 建模细节： [Modeling](https://zxtreme.github.io/iGem.github.io/html/model.html)  
> 关于安全： [Safety](https://zxtreme.github.io/iGem.github.io/html/safety.html)  
> 实践总览： [Overview](https://zxtreme.github.io/iGem.github.io/html/overview.html)  
> 深入实践： [Intergrated Human Practice](https://zxtreme.github.io/iGem.github.io/html/human-practices.html)  
> 学习与交流： [Education & Communication](https://zxtreme.github.io/iGem.github.io/html/communication.html)  
> 游戏登录页： [Game](https://zxtreme.github.io/iGem.github.io/html/game.html)  
> 与项目内容相关的游戏： [Login](https://zxtreme.github.io/iGem.github.io/html/login.html)  
> 可持续发展： [Sustainable](https://zxtreme.github.io/iGem.github.io/html/sustainable.html)  
> 关于评判： [Judging](https://zxtreme.github.io/iGem.github.io/html/judging.html)  


### 技术栈
```
HTML、CSS、JavaScript、JQuery、Less、Mysql、原生XMLHttpRequest、Node.js
```

### 项目文件介绍
```
所有文件都采用了 页面名+文件类型 的格式命名

├─ index.html 主页面
├─ css        各页面的css文件
├─ fonts      使用的字体文件
├─ html       各页面的html文件
├─ images     各页面使用到的图片
└─ js         各页面的js文件
```
