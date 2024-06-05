import React from 'react';

function BlogDetail({ blog, onClick }) {
  const handleClick = () => {
    onClick(blog);
  };

  return (
    <div className="blog-detail" onClick={handleClick}>
      <img src={blog.img[0]} alt={blog.title} className="img-fluid" />
      <h2>{blog.title}</h2>
      <p>{blog.description}</p>
      <div className="blog-content">
        {blog.content}
      </div>
    </div>
  );
}

export default BlogDetail;
