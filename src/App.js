import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { SocialIcon } from 'react-social-icons'

import './App.css'

import About from './About'
import Pictures from './Pictures'
import WhatsHere from './WhatsHere'
import Recipes from './Recipes'
import Projects from './Projects'

const BasicExample = () => (
  <Router>
    <div className='App'>
      <h1 className='mainIcon'>
        <img src="./assets/images/nigelk-icon.svg" alt=""></img>
      </h1>

      <div className='nav-bar autogrid'>
        <div className='center'><Link to="/">About</Link></div>
        <div className='center'><Link to="/WhatsHere">What's here ?</Link></div>
        <div className='center'><Link to="/Projects">Projects</Link></div>
        <div className='center'><Link to="/Recipes">Recipes</Link></div>
        <div className='center'><Link to="/Pictures">Pictures</Link></div>
      </div>

      <div className='content'>
        <Route exact path="/" component={About}/>
        <Route path="/WhatsHere" component={WhatsHere}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/recipes" component={Recipes}/>
        <Route path="/pictures" component={Pictures}/>
      </div>

      <div className='social'>
        <SocialIcon url='https://github.com/kozlown' color='black'/>
        <SocialIcon url='https://soundcloud.com/nigel-kozlowski' color='black'/>
        <SocialIcon url='https://twitter.com/nigelkozlowski' color='black'/>
        <SocialIcon url='https://www.instagram.com/nigel.climbing/' color='black'/>
      </div>
    </div>
  </Router>
)

export default BasicExample
