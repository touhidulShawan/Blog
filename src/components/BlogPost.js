import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions";
import BlogImage from "./BlogImage";
import BlogAuthor from "./BlogAuthor";

class BlogPost extends Component {
  componentDidMount() {
    this.props.fetchPost();
  }

  render() {
    return this.props.posts.map(post => {
      return (
        <div className="card" key={post.id}>
          <BlogImage imageId={post.id} />
          <div className="content">
            <div className="header">{post.title}</div>
            <div className="description">{post.body}</div>
          </div>
          <BlogAuthor userID={post.userId} />
        </div>
      );
    });
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(
  mapStateToProps,
  { fetchPost }
)(BlogPost);
