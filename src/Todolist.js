import React , { Component ,Fragment} from "react";
import TodoItem from "./TodoItem";
import Axios from "axios";

import "./style.css";
class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue:"",
            list:[]
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelet = this.handleItemDelet.bind(this);
    }
    
    render(){
        //当state与props发生变化时，render会重新渲染
        //当父组件的render重新执行时，子组件的render函数也会被重新执行
        //虚拟dom就是一个js对象，用它来描述真实的dom
      
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">
                        输入内容
                    </label>
                    <input 
                        id="insertArea"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        
                    />
                    <button
                        onClick={this.handleBtnClick}
                    >提交</button></div>
                <ul>
                    {this.getInputItem()}
                </ul>
               
            </Fragment>
        )
    }
   componentDidMount(){
    Axios.get("/api/todolist")
         .then((res) => {
             console.log(res.data)
             this.setState(() =>(
                {list:[...res.data]}
             ))
        })
         .catch(() => {console.log("err")})
   }
    getInputItem(){
        return this.state.list.map((item,index) => {
                return (
                        <TodoItem 
                            key={item}
                            content={item}
                            index={index}
                            deleteItem={this.handleItemDelet}
                        />
                )
            })
    }
    handleInputChange(e){
        const value = e.target.value;
        this.setState(() => ({
            inputValue:value
        }))
    }
    handleBtnClick(e){
        this.setState((preState) => ({
            list:[...preState.list,preState.inputValue],
            inputValue:"",
        }))
    }
    handleItemDelet(index){
        this.setState((preState) => {
            const list = [...preState.list];
            list.splice(index,1);
            return {list}
        });
    }
}
export default TodoList;
