import React,{Component} from "react";
import PropTypes from "prop-types";

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleDelItem = this.handleDelItem.bind(this);
    }
    //组件将要接收props变化时执行的函数
    //1、这个组件要从父元素接收props属性
    //2、这个组件第一次存在时不会被调用执行
    //3、当这个组件在第二次存在时才会被执行
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content != this.content){
            return true
        }else{
            return false
        }
    }
    render(){
        const {content,test} = this.props;
        return (
            //jsx是一个模板对象 ==》 转化为js == > 成为真实dom
            <div onClick={this.handleDelItem}>
              {test} - {content}
            </div>
        )
    }
    handleDelItem(){
       const {deleteItem,index} = this.props;
       deleteItem(index);
    }

}
TodoItem.proptypes = {
    test:PropTypes.string.isRequired,
    content:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
    deleteItem:PropTypes.func,
    index:PropTypes.number

}
TodoItem.defaultProps={
    test:"hello world"
}
export default TodoItem;