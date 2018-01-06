import React from 'react'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'

import './About.css'
import NutritionTable from './NutritionCalculator/NutritionTable'
import Search from './NutritionCalculator/Search'

class NutritionCalculator extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      search: false,
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

  handleAddClick () {
    this.setState({
      search: true
    })
  }

  handleSearchClose () {
    this.setState({
      search: false
    })
  }

  render () {
    return (
      <div className='RecipeCreator'>
        <NutritionTable food={this.state.food}>
          <Button onClick={this.handleAddClick.bind(this)} fab color="primary" aria-label="add">
            <AddIcon />
          </Button>
        </NutritionTable>
        { this.state.search === true && <Search handleClose={this.handleSearchClose.bind(this)}/>}
      </div>
    )
  }
}

export default NutritionCalculator