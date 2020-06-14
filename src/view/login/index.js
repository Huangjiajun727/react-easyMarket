import React, { Component } from 'react';
import './index.scss';
import { Button, Toast } from 'antd-mobile';
import { postLogin } from '../../http/getData';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CommonAction from '../../store/actions/common';

class Login extends Component {
    async submitLogin() {
        const mobile = this.refs.phoneNumber.value
        const password = this.refs.passwords.value
        // const { errno, data, errmsg } = await postLogin({ mobile, password })
        var errno = 0;
        var errmsg = "";
        var data = {
            mobile: "15323807318",
            password: "123456",
            sessionKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNiwiaWF0IjoxNTkyMTAyMTE2fQ.KcuCs9Ygu493IKP_T9ZGkIWCcJpUUmtCt0U5qvZ3YRc"
        }
        if (errno === 0) {
            window.localStorage.setItem('token', data.sessionKey)
            window.localStorage.setItem('nideShopUser', data.mobile)
            this.props.actions.loginSuccess()
        } else {
            Toast.fail(errmsg, .5)
        }
    }
    render() {
        return (
            <div className="loginBox">
                <div className="logo">
                    <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="" />
                </div>
                <div className="loginMain">
                    <div className="inputWrap onePx_bottom">
                        <input type="text" ref="phoneNumber" defaultValue={15323807318} placeholder="请输入手机号码" />
                    </div>
                    <div className="inputWrap onePx_bottom">
                        <input type="password" ref="passwords" defaultValue={123456} placeholder="请输入登录密码" />
                    </div>
                    <div className="loginBtn">
                        <Button type="primary" onClick={this.submitLogin.bind(this)}>登录</Button>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(CommonAction, dispatch) })
export default (connect(null, mapDispatchToProps)(Login))