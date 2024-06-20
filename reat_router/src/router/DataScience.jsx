import React from 'react'
import dataScienceImg from '../assets/data-science.jpg';


function DataScience() {
  return (
    <div>
    <h2>Data Science</h2>
    <img src={dataScienceImg} alt="Data Science" style={{ width: '100%', height: 'auto' }} />
    <p>Dive into the world of Data Science with our specialized courses. Learn about data analysis, machine learning, statistical modeling, and big data technologies. Gain practical skills to analyze and interpret complex data sets.</p>
</div>
  )
}

export default DataScience