import React from 'react'

import './About.css'
import Table from './NutritionCalculator/Table'

class NutritionCalculator extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      food: [
        {
          name: 'Craquinette',
          quantity: 150,
          carbohydrate: {
            simple: 15,
            complex: 30,
            total: 45
          },
          lipid: {
            SFA: 5,
            o3: 0,
            o6: 12,
            o9: 20,
            total: 37
          },
          protein: 20,
          energy: 344
        },
        {
          name: 'Craquinette 2',
          quantity: 150,
          carbohydrate: {
            simple: 15,
            complex: 30,
            total: 45
          },
          lipid: {
            SFA: 5,
            o3: 0,
            o6: 12,
            o9: 20,
            total: 37
          },
          protein: 20,
          energy: 344
        }
      ]
    }
  }

  render () {
    return (
      <div className='RecipeCreator'>
        <Table food={this.state.food}/>
      </div>
    )
  }
}

export default NutritionCalculator