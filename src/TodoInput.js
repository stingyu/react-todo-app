import React,{Component} from "react"

export default class TodoInput extends Component {
    
    render() {
        return <input className="add" type="text" value={this.props.content}/>
    }
}