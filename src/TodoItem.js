import React,{Component} from "react";

export default class TodoItem extends Component {
    render() {
        return <div className="text">{this.props.item.content}</div>
    }
}