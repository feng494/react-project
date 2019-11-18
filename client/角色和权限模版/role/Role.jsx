import React, { Component } from 'react';
import { Card, Button, Table, Radio, Modal } from 'antd';

import AddRoleForm from './add-role-form';
import UpdateRoleForm from './update-role-form';
// 单选
const RadioGroup = Radio.Group;

class Role extends Component {
  state = {
    value: '',  //单选的默认值，也就是选中的某个角色的id值
    roles: [], //权限数组
    isShowAddRoleModal: false, //是否展示创建角色的标识
    isShowUpdateRoleModal: false, //是否展示设置角色的标识
    isDisabled: false
  };

  // addRoleFormRef =this.addRoleForm 
  // updateRoleFormRef =this.updateRoleForm 

  columns = [{
    dataIndex: '_id',
    render: id => <Radio value={id} />
  }, {
    title: '角色名称',
    dataIndex: 'name',
  }, {
    title: '创建时间',
    dataIndex: 'createTime',
  }, {
    title: '授权时间',
    dataIndex: 'authTime',
  }, {
    title: '授权人',
    dataIndex: 'authName',
  }];

  onRadioChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  
  switchModal = (key, value) => {
    return () => {
      this.setState({[key]: value})
    }
  };
  
  //创建角色的回调函数
  addRole = () => {};
  //设置角色权限的回调函数
  updateRole = () => {};
  
  render () {
    const { roles, value, isDisabled, isShowAddRoleModal, isShowUpdateRoleModal } = this.state;
    
    return (
      <Card
        title={
          <div>
            <Button type='primary' onClick={this.switchModal('isShowAddRoleModal', true)}>创建角色</Button> &nbsp;&nbsp;
            <Button type='primary' disabled={isDisabled} onClick={this.switchModal('isShowUpdateRoleModal', true)}>设置角色权限</Button>
          </div>
        }
      >
        <RadioGroup onChange={this.onRadioChange} value={value} style={{width: '100%'}}>
          <Table
            columns={this.columns}
            dataSource={roles}
            bordered
            rowKey='_id'
            pagination={{
              defaultPageSize: 5,
              showSizeChanger: true,
              pageSizeOptions: ['5', '10', '15', '20'],
              showQuickJumper: true,
            }}
          />
        </RadioGroup>
  
        <Modal
          title="创建角色"
          visible={isShowAddRoleModal}
          onOk={this.addRole}
          onCancel={this.switchModal('isShowAddRoleModal', false)}
          okText='确认'
          cancelText='取消'
        >
          <AddRoleForm setAddRoleForm={form=>this.addRoleFormRef=form} />
        </Modal>

        <Modal
          title="设置角色权限"
          visible={isShowUpdateRoleModal}
          onOk={this.updateRole}
          onCancel={this.switchModal('isShowUpdateRoleModal', false)}
          okText='确认'
          cancelText='取消'
        >
          <UpdateRoleForm setUpdateForm={form=>this.updateRoleFormRef=form} />
        </Modal>
        
      </Card>
    )
  }
}

export default Role;