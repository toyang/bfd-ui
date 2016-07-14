import React from 'react'
import Pre from '../Pre'
import { Props, Prop } from '../Props'
import SearchInput from 'c/SearchInput'


export default React.createClass({
  handleClick(value) {
    console.log(value);
  },
  render() {
    return (
      <div>
        <h1>搜索框 @tenglong.jiang</h1>
        <h2>SearchInput</h2>
        <Pre>
        {`
import SearchInput from 'bfd-ui/lib/SearchInput'

const App = React.createClass({
  handleClick(value) {
    console.log(value)  
  },
  render() {    
    return <SearchInput placeholder="请输入任务名称" onSearch={this.handleClick} />
  }
})`
        }
        </Pre>
        <SearchInput placeholder="请输入任务名称" label="查询" onSearch={this.handleClick} />
        <div className="clearfix"></div>
        <Props>
          <Prop name="placeholder" type="String">
            <p>搜索框提示信息</p>
          </Prop>
          <Prop name="label" type="String">
            <p>搜索按钮名称，默认是搜索</p>
          </Prop>
          <Prop name="onSearch" type="function" required>
            <p>搜索按钮单击事件，value为搜索框输入值</p>
          </Prop>       
        </Props>
      </div>
    )
  }
}) 