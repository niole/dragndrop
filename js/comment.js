"use strict"

const React = require('react');
const $ = require('jquery');

class Comments extends React.Component {
    constructor(props) {
          super(props);
          this.props = props;
    }

    render() {
        return <p key={this.props.comment.id} id={this.props.comment.id}>{this.props.comment.text}</p>;
    }
}

Comment.propTypes = {
    comment: React.PropTypes.object,
};

module.exports = Comments;
