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
import NutritionCalculator from './NutritionCalculator'

const BasicExample = () => (
  <Router basename='/nigelk.fr'>
    <div className='App'>
      <h1 className='mainIcon'>
        <img src="./assets/images/nigelk-icon.svg" alt=""/>
      </h1>

      <div className='nav-bar autogrid'>
        <div className='center'><Link to="/">About</Link></div>
        <div className='center'><Link to="/whatshere">What's here ?</Link></div>
        <div className='center'><Link to="/projects">Projects</Link></div>
        <div className='center'><Link to="/recipes">Recipes</Link></div>
        <div className='center'><Link to="/pictures">Pictures</Link></div>
        <div className='center'><Link to="/nutrition-calculator">Nutrition Calculator</Link></div>
      </div>

      <div className='content'>
        <Route exact path="/" component={About}/>
        <Route path="/whatshere" component={WhatsHere}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/recipes" component={Recipes}/>
        <Route path="/pictures" component={Pictures}/>
        <Route path="/nutrition-calculator" component={NutritionCalculator}/>
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
