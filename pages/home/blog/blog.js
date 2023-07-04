import React from 'react';
import Details from "./details";
const Blog = () => {
  return (
    <div className={'container-blog'}>
      <h3>What’s New?</h3>
      <h2>Our Blog</h2>
      <div className="blog-row">
        <Details/>
        <Details/>
        <Details/>
      </div>
    </div>
  );
};

export default Blog;