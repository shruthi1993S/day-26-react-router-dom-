import React from 'react'
import allCoursesImg from '../assets/all.png';
function All() {
  return (
    <div>
    <h2>All Courses</h2>
    <img src={allCoursesImg} alt="All Courses" style={{ width: '100%', height: 'auto' }} />
    <p>Explore our diverse range of courses across various domains. Whether you're interested in technology, science, or business, we have something for everyone. Our courses are designed to provide comprehensive knowledge and skills to help you succeed in your career.</p>
</div>
  )
}

export default All