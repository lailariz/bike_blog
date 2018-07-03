import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Posts from '../content/Posts'

class Post extends Component {
  propTypes = {
    title: PropTypes.string,
  }

  render() {
    const postText = Posts["07-01-2018"].text


    return (
      <div>
        <h1>Traveling to Europe: Coincidence and Kindness</h1>
        <div className="post-content">
					{postText.map(function(contentValue){
            return <p>{contentValue}</p>;
          })}

          { 
            postText.reduce(p => (<p>{postText[p]}</p>))
          }
        </div>
      </div>
    );
  }
}

export default Post;
