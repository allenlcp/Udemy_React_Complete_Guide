import React, { Component } from "react";
import axiosInstance from "../../../axios";
import Post from "../../../components/Post/Post";
import "./Posts.css"; // not using css module here
// import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    console.log(this.props);
    axiosInstance
      .get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "Max"
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch(err => {
        console.log(err);
      });
  }

  postSelectedHandler = id => {
    // this.setState({ selectedPostId: id });
    // this.props.history.push('/posts/'+id); -> also possible
    this.props.history.push({
      pathname: "/posts/" + id
    });
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong</p>;

    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          //<Link to={"/" + post.id} key={post.id}>
          <Post
            key={post.id}
            clicked={() => this.postSelectedHandler(post.id)}
            title={post.title}
            author={post.author}
          />
          //</Link>
        );
      });
    }
    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route path={this.props.match.url + "/:id"} exact component={FullPost} />
      </div>
    );
  }
}

export default Posts;
