import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class BlogAuthor extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userID);
  }

  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return (
      <div className="extra content">
        <span>
          <i className="user icon" />
          {user.name}
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find(user => user.id === ownProps.userID)
  };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(BlogAuthor);
