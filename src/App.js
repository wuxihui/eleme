import React, { Component } from 'react';
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
const Search = Loadable({
  loader: () => import('./views/search'),
  //加载中的提示组件
  loading: () => <div>加载中...</div>
})


export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
           <Route path="/search" component={ Search } />
          <Route path="/" component={ Home } />

        </Switch>
      </Router>
    )
  }
}
