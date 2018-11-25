import React , { Component,Fragment} from "react";
import "./style.css"
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            show:true
        }
        this.handleTrugger = this.handleTrugger.bind(this);
    }
    render(){
        return (
            <Fragment>
                <input className={this.state.show ? "show" : "hide"} />
                <button onClick={this.handleTrugger}> trogger</button>
            </Fragment>
        )
    }
    handleTrugger(){
        this.setState({
            show:this.state.show ? false : true
        })
    }
}
export default App;