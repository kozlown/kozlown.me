import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import About from './About'
import Pictures from './Pictures'
import WhatsHere from './WhatsHere'
import Recipes from './Recipes'
import Projects from './Projects'

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">About</Link></li>
        <li><Link to="/WhatsHere">WhatsHere</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
        <li><Link to="/Recipes">Recipes</Link></li>
        <li><Link to="/Pictures">Pictures</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={About}/>
      <Route path="/WhatsHere" component={WhatsHere}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/recipes" component={Recipes}/>
      <Route path="/pictures" component={Pictures}/>
    </div>
  </Router>
)

export default BasicExample
