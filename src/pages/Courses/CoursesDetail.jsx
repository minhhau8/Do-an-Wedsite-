import React from 'react';

function CourseCard({ course, onClick }) {
  const handleClick = () => {
    onClick(course);
  };

  return (
    <div className="col-12 col-md-4 mb-4">
      <div className="courses-detail" onClick={handleClick}>
        <img src={course.img[0]} alt={course.title} className="img-fluid" />
        <h2>{course.title}</h2>
        <p>{course.description}</p>
      </div>
    </div>
  );
}

export default CourseCard;
