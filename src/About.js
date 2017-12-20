import React from 'react'

import './About.css'

const About = () => (
  <div className='About'>
    <h2>
      Nigel Kozlowski
    </h2>
    <p>Computer science student at <a target='_' href="http://www.ipi-ecoles.com/">IPI</a></p>
    <p>
      <u>Climber</u> and <u>Web developer</u>
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