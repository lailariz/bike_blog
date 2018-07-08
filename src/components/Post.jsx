import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Posts from '../content/Posts'

class Post extends Component {
  static propTypes = {
    title: PropTypes.string,
  }

  render() {
    const date = "07-01-2018";
    const postText = Posts[date]
    // const re = /\d\d-\d\d\-\d\d\d\d$/;
    // const date = re.exec(this.props.match.url)[0];
    // const postText = Posts[date];

    return (
      <div>
        <h1>{postText.title}</h1>
        <div className="pt-2 post-content">
          {postText.text.map(function(contentValue){
            return <p>{contentValue}</p>;
          })}
        </div>
      </div>
    );
  }
}

export default Post;
