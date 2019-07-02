import React, { Component } from 'react'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Loadable from 'react-loadable'

const Home = Loadable({
  loader: () => import('./views/home'),
  //加载中的提示组件
  loading: () => <div>加载中...</div>
})
const Fanxian = Loadable({
  loader: () => import('./views/fanxian'),
  loading: () => <div>加载中...</div>

})
const Order = Loadable({
  loader: () => import('./views/order'),
  loading: () => <div>加载中...</div>
})
const Center = Loadable({
  loader: () => import('./views/center'),
  loading: () => <div>加载中...</div>
})

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/center" component={ Center } />
          <Route path="/order" component={ Order } />
          <Route path="/fanxian" component={ Fanxian } />
          <Route path="/" component={ Home } />
        </Switch>
      </Router>
    )
  }
}
