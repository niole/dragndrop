"use strict"

const React = require('react');
const $ = require('jquery');
const Comments = require('./comment');

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { comments: [],
                       target: {index: null, x: null, y: null}};
    }

    componentDidMount() {
        const list = this;
        let dragging;
        let indexDrag;
        $('#toplevel').on( 'dragstart',  event => {
           event.preventDefault();

           dragging = true;
           indexDrag = parseInt(event.target.getAttribute("data-index"));
        });

        $('#toplevel').on( 'dragend',  event => {
           dragging = false;
           indexDrag = null;
        });

        window.addEventListener('mousemove', event => {

            if (dragging) {
                console.log('dragging');
                list.setState({target: {index: indexDrag, x: event.pageX, y: event.pageY}});
            }
        });
    }

    addTodo() {
        let todoText = this.refs.todotext.value;
        this.refs.todotext.value = '';
        let newTodo = { text: todoText, id: this.state.comments.length.toString() };
        this.setState({ comments: this.state.comments.concat([newTodo]) });
    }

    showTodos() {
        return this.state.comments.map( (comment, i) => {
            let styles = {};
            if (i === this.state.target.index) {
                styles.position = 'absolute';
                styles.left = this.state.target.x;
                styles.top = this.state.target.y;
            }
            return <Comments styles={styles} index={i} comment={comment}/>;
        });
    }

    render() {
        return (
            <div id='toplevel'>
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
