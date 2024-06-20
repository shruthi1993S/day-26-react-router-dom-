import React from 'react'
import careerImg from '../assets/Career.jpg';

function Career() {
  return (
    <div>
            <h2>Career</h2>
            <img src={careerImg} alt="Career" style={{ width: '100%', height: 'auto' }} />
            <p>Our Career courses are designed to help you succeed in the professional world. Learn essential skills like communication, leadership, time management, and career planning. Prepare yourself for the challenges of the modern workplace and achieve your career goals.</p>
        </div>
  )
}

export default Career