"use strict"

const React = require('react');
const $ = require('jquery');

class Comments extends React.Component {
    constructor(props) {
          super(props);
          this.props = props;
    }

    render() {
        return <p
                  style={this.props.styles}
                  data-index={this.props.index}
                  key={this.props.index}
                  id={this.props.comment.id}>
                  {this.props.comment.text}</p>;
    }
}

Comment.propTypes = {
    comment: React.PropTypes.object,
    index: React.PropTypes.number,
    styles: React.PropTypes.object
};

module.exports = Comments;
