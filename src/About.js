import React from 'react'

import './About.css'

const About = () => (
  <div className='About'>
    <h2>
      Nigel Kozlowski
    </h2>
    <p>Computer science student at <a target='_' href="http://www.ipi-ecoles.com/">IPI</a></p>
    <p>
      <a target='_' href="https://www.instagram.com/nigel.climbing">Climber</a> and <a target='_' href="https://github.com/kozlown">Web developer</a>
    </p>
    <p>
      Interested by <u className='dotted'>vegan food</u> and <u className='dotted'>mental & physical development</u>
    </p>
    <p>
      Javascript lover <span className="red">❤</span>
    </p>
  </div>
)
export default About