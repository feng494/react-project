import React, { Component } from 'react';
// 数组数据
const messageDetails = [
  { id: 1, title: 'message001', content: 'detail---001' },
  { id: 2, title: 'message002', content: 'detail---002' },
  { id: 3, title: 'message003', content: 'detail---003' }
]
class MessageDetail extends Component {
  state = {
    detail: {}
  }
  // 某个时刻,根据message组件传过来的参数,在messageDetails数组中查找数据(对象),把这个对象的数据直接更新到state中的detail对象中
  // 这个生命周期函数只会一次
  componentDidMount() {
    // 由于id是字符串类型,需要转数字类型,可以使用*1的方式
    const id = this.props.match.params.id * 1
    // 在数组中查找数据
    this.getDetailById(id)
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.match.params.id)
    // console.log(nextProps.match.params.id)
    const id = nextProps.match.params.id * 1
    this.getDetailById(id)
  }
  // 封装的函数
  getDetailById = (id) => {
    // 在数组中查找数据
    setTimeout(() => {
      const detail = messageDetails.find((m) => m.id === id)
      // 更新数据
      this.setState({
        detail
      })
    }, 1000);
  }
  render() {
    const { detail } = this.state
    return (
      <div>
        <ul>
          <li>id:{this.props.match.params.id}</li>
          <li>title:{detail.title}</li>
          <li>content:{detail.content}</li>
        </ul>
      </div>
    );
  }
}

export default MessageDetail;