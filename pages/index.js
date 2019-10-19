import React, { useState } from 'react'
import Head from 'next/head'
import { Row, Col, List, Icon, Pagination } from 'antd'
import axios from 'axios'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'

import '../style/pages/index.less'


const Home = (list) => {
  console.log(list);
  const [mylist, setMylist] = useState([list.data[0]]
  )
  console.log(mylist);
  // onShowSizeChange(current, pageSize) {
  //   console.log(current, pageSize);
  // }
  return (
    <>
      <div>
        <Head>
          <title>忆初</title>
        </Head>
      </div>
      <Header></Header>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
          <div>
            <List
              header={<div>最新日志</div>}
              itemLayout="vertical"
              dataSource={mylist}
              renderItem={item => (
                <List.Item>
                  <div className="list-title">{item.title}</div>
                  <div className="list-icon">
                    <span><Icon type="calendar" /> 2019-06-28</span>
                    <span><Icon type="folder" /> 视频教程</span>
                    <span><Icon type="fire" /> 5498人</span>
                  </div>
                  <div className="list-context">{item.content}</div>
                </List.Item>
              )}
            />

          </div>
          <div className="flex-center">
            <Pagination
              showSizeChanger
              // onShowSizeChange={onShowSizeChange}
              defaultCurrent={3}
              total={500}
            />
          </div>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author></Author>
          <Advert></Advert>
        </Col>
      </Row>
      <Footer></Footer>
    </>
  )
}
Home.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    axios('http://127.0.0.1:7001/default/getArticleList').then(
      (res) => {
        console.log('远程获取数据结果:', res.data.data)
        resolve(res.data)
      }
    )
  })

  return await promise
}
export default Home