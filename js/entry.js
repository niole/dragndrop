"use strict"

const React = require('react');
const $ = require('jquery');
const Comments = require('./comment');

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { comments: [] };
    }

    addTodo() {
        let todoText = this.refs.todotext.value;
        this.refs.todotext.value = '';
        let newTodo = { text: todoText, id: this.state.comments.length.toString()+':'+Math.random().toString() };
        this.setState({ comments: this.state.comments.concat([newTodo]) });
    }

    showTodos() {
        return this.state.comments.map( comment => {
            return <Comments comment={comment}/>;
        });
    }

    render() {
        return (
            <div>
                <input ref='todotext' type='text'/>
                <button onClick={this.addTodo.bind(this)}> click </button>
                {this.showTodos()}
            </div>
        );
    }
}

$(document).ready( function(){
    React.render( <List/>, $('#root')[0]);
});
