import React, { Component } from 'react'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Loadable from 'react-loadable'

const Home = Loadable({
  loader: () => import('./views/home/index'),
  //加载中的提示组件
  loading: () => <div>加载中...</div>
})
const Coil = Loadable({
  loader: ()=> import('./views/coil'),
  loading: ()=> <div>加载中...</div>
})
const Prize = Loadable({
  loader: () => import('./views/prize'),
  loading: () => <div>加载中...</div>
})
const Favourable = Loadable({
  loader: () => import('./views/favourable'),
  loading: () => <div>加载中...</div>
})
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/favourable" component={ Favourable } />
          <Route path="/prize" component={ Prize } />
          <Route path="/coil" component={ Coil } />
          <Route path="/" component={ Home } />
        </Switch>
      </Router>
    )
  }
}
