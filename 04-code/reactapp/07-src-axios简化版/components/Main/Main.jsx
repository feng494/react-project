import React, { Component } from 'react';
// 引入PropTypes
import PropTypes from 'prop-types'
// 引入axios
import axios from 'axios'
// 引入样式
import './Main.css'
class Main extends Component {
  state = {
    firstView: true, // 默认显示的第一个界面
    loading: false, // 发送请求的时候显示的第二个界面
    users: [], // 用来存储请求之后的用户信息对象的
    errorMsg: '' // 用来存储错误信息的
  }

  // 限定一下父级组件传过来的数据类型及是否是必须地
  static propTypes = {
    searchName: PropTypes.string.isRequired
  }

  // 应该是父级组件传入的数据发生了变化才发请求searchName---变化---父级---->Main组件中
  async componentWillReceiveProps(nextProps) {
    const searchName = nextProps.searchName
    //console.log(nextProps)
    const url = `https://api.github.com/search/users?q=${searchName}`
    this.setState({
      firstView: false,
      loading: true
    })
    // 直接获取response
    try {
      // 发送异步请求
      const response = await axios.get(url)
      // 获取到响应的数据
      const result = response.data
      const users = result.items.map((user, index) => ({
        name: user.login,
        avatar_url: user.avatar_url,
        html_url: user.html_url
      }))
      // // 更新数据
      this.setState({
        loading: false,
        users
      })
    } catch (error) {
      this.setState({
        loading: false,
        errorMsg: '请求失败:' + error
      })
    }

  }
  render() {
    const { firstView, loading, users, errorMsg } = this.state;
    if (firstView) {
      return <h1>请输入搜索内容</h1>
    } else if (loading) {
      return <h1>正在请求中...</h1>
    } else if (errorMsg) {
      return <h1>{'请求失败:' + errorMsg}</h1>
    } else {
      return (
        <div className="row">
          {
            users.map((user, index) => {
              return (
                <div className="card" key={index}>
                  <a href={user.html_url} >
                    <img src={user.avatar_url} alt={user.name} style={{ width: 100 }} />
                  </a>
                  <p className="card-text">{user.name}</p>
                </div>
              )
            })
          }

        </div>

      );
    }

  }
}

export default Main;