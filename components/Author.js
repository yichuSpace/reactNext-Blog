import { Avatar, Divider } from 'antd'
import '../style/components/author.css'

const Author = () => {

  return (
    <div className="author-div comm-box">
      <div> <Avatar size={100} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569646605285&di=105f59cc565b780e26915d805d0c5753&imgtype=0&src=http%3A%2F%2Fpic.eastlady.cn%2Fuploads%2Ftp%2F201708%2F9999%2F2c8e535662.jpg" /></div>
      <div className="author-introduction">
        程序员，专注于WEB和移动前端开发。
        <Divider>社交账号</Divider>
        <Avatar size={28} icon="github" className="account" />
        <Avatar size={28} icon="qq" className="account" />
        <Avatar size={28} icon="wechat" className="account" />
      </div>
    </div>
  )

}

export default Author
