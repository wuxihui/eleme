import React, { Component } from 'react'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Loadable from 'react-loadable'
import Login from './views/home/login'

const Home = Loadable({
  loader: () => import('./views/home/index'),
  //加载中的提示组件
  loading: () => <div>加载中...</div>
})


export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route path="/center" component={ Center } />
          <Route path="/order" component={ Order } />
          <Route path="/fanxian" component={ Fanxian } /> */}
          <Route path="/login" component={ Login } />
          <Route path="/" component={ Home } />
        </Switch>
      </Router>
    )
  }
}
