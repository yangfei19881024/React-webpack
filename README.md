#Es6 React webpack
#＃各组件分开，路由单独抽出来
##React 路由
### 使用 createBrowserHistory 可以去掉 默认的 # 和 后面的参数
### 嵌套路由可以使用 {this.props.children} 详见阮一峰老师webpack-demo16
### 非嵌套路由可以参考本案例
### 相对路径和绝对路径
```javascript
绝对路径 路由配置
<Router>
  <Route path="/">
    <Route path="/goods" component={goods}>
      <Route path="/goods-list" component={goodsList}></Route>
      <Route path="/goods-detail" component={goodsDetail></Route>
    </Route>
  </Route>
</Router>
绝对路径 链接配置
<Link to="/goods-list">商品列表</Link>
<Link to="/goods-detail">商品详情</Link>

相对路径 路由配置
<Router>
  <Route path="/">
    <Route path="/goods" component={goods}>
      <Route path="goods-list" component={goodsList}></Route>
      <Route path="goods-detail" component={goodsDetail></Route>
    </Route>
  </Route>
</Router>
绝对路径 链接配置
<Link to="/goods/goods-list">商品列表</Link>
<Link to="/goods/goods-detail">商品详情</Link>
```
