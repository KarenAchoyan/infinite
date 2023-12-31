import React, {useEffect} from 'react';
import Details from "./details";
import {useDispatch, useSelector} from "react-redux";
import {getReviews} from "@/store/review/actions";
import {getBlogs} from "@/store/blog/actions";

const Blog = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs.request());
  }, [dispatch]);

  return (
    <div className={'container-blog'}>
      <h3>What’s New?</h3>
      <h2>Our Blog</h2>
      <div className="blog-row">
        {blogs.map((item) => (
          <Details item={item}/>
        ))}
      </div>
    </div>
  );
};

export default Blog;