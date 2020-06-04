import React from 'react';
import { connect } from 'react-redux'
import { Button, Card, WingBlank, WhiteSpace } from 'antd-mobile';
import './app.css'

class AppBox extends React.Component {
  render() {
    var num = this.props.num;
    var isLogin = this.props.isLogin;

    var addNum = this.props.addNum;
    var changeLogin = this.props.changeLogin;

    return (
      <div className='wrapper'>
        <h2>计数：{num}</h2>
        <Button onClick={addNum}>+1</Button>
        <h3>登录状态：{isLogin ? '已登录' : '未登录'}</h3>
        <Button onClick={(e) => { changeLogin('hh', e) }}>登录</Button>
        <div className="text">4545</div>

        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <Card>
            <Card.Header
              title="This is title"
              thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
              extra={<span>this is extra</span>}
            />
            <Card.Body>
              <div>This is content of `Card`</div>
            </Card.Body>
            <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
          </Card>
          <WhiteSpace size="lg" />
        </WingBlank>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    num: state.num,
    isLogin: state.isLogin
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNum: () => {
      dispatch({ type: 'addNum', msg: '哈哈哈' })
    },
    changeLogin: (parmas, e) => {
      console.log(parmas, e)
      dispatch({ type: 'login', num: 1996 })
    }
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppBox)

export default App;
