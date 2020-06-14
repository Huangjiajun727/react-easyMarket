import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import '../assets/style/common.scss';
import routes from '../router';
import Tab from '../component/tab';
import { ActivityIndicator } from 'antd-mobile';
import * as commonAction from '../store/actions/common';
import Login from './login';

const tabList = [
  { icon: 'iconfont icon-caidaniconshouyehui', name: '首页', url: '/home' },
  { icon: 'iconfont icon-clone', name: '专题', url: '/topic' },
  { icon: 'iconfont icon-sort', name: '分类', url: '/catelog' },
  { icon: 'iconfont icon-cart', name: '购物车', url: '/cart' },
  { icon: 'iconfont icon-mine', name: '我的', url: '/profile' }
];

function RenderRouters({ routes }) {
  return routes.map((item, index) => {
    return (
      <Route
        path={item.link}
        key={item.name}
        render={() => (
          <div className={item.isTab ? 'tab-page-content' : 'no-'}>
            <item.component />
          </div>
        )} />
    )
  })
}

class AppBox extends Component {
  render() {
    const { isLoading, isLogin } = this.props;

    return (
      <div className='app'>
        <ActivityIndicator animating={isLoading} toast text="loading..." />

        {
          isLogin ?
            <Router>
              <Fragment>

                <Route exact path="/" render={() => (
                  <Redirect to="/home" />
                )} />
                <RenderRouters routes={routes}></RenderRouters>
                <Tab tabList={tabList}></Tab>

              </Fragment>
            </Router>
            :
            <Login></Login>
        }

      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
    isLoading: state.common.isloading,
    isLogin: state.common.isLogin
  }
)

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(commonAction, dispatch)
})

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppBox)

export default App;
