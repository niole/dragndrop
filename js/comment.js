"use strict"

const React = require('react');
const $ = require('jquery');

class Comments extends React.Component {
    constructor(props) {
          super(props);
          this.props = props;
    }

    render() {
        return <p>{this.props.comment}</p>;
    }
}

Comment.propTypes = {
    comment: React.PropTypes.object,
};

module.exports = Comments;
