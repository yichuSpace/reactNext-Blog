import React, { useState } from 'react'
import { Row, Col, Menu, Icon } from 'antd'
import '../style/components/header.less'

const Header = () => {
  const [current, setCurrent] = useState('home')

  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className="header-logo">忆初</span>
          <span className="header-txt">专注前端开发。</span>
        </Col>

        <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal" selectedKeys={[current]} >
            <Menu.Item key="home" >
              <Icon type="home" />
              <span>首页</span>
            </Menu.Item>
            <Menu.Item key="video">
              <Icon type="youtube" />
              <span>视频</span>
            </Menu.Item>
            <Menu.Item key="life">
              <Icon type="smile" />
              <span>生活</span>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  )
}

export default Header