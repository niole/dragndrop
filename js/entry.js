"use strict"

const React = require('react');
const $ = require('jquery');
const Comments = require('./comment');

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { comments: [] };
    }

    render() {
        return this.state.comments.map( comment => {
            return <Comments comment={comment}/>;
        });
    }
}

$(document).ready( function(){
    React.render( <List/>, $('#root')[0]);
});
