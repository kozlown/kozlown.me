import React from 'react'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'

import './About.css'
import NutritionTable from './NutritionCalculator/NutritionTable'
import Search from './NutritionCalculator/Search'
import getNutrients from './models/Nutrients'

class NutritionCalculator extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      search: false,
      food: []
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

  handleAddAliment (aliment) {
    getNutrients(aliment).then(nutrients => {
      this.setState({
        food: this.state.food.concat([nutrients])
      })
    })
  }

  handleQuantityChange (id, quantity) {
    const food = [...this.state.food]

    food[id].quantity = parseFloat(quantity)

    this.setState({
      food
    })
  }

  render () {
    return (
      <div className='RecipeCreator'>
        <NutritionTable food={this.state.food} onQuantityChange={this.handleQuantityChange.bind(this)}>
          <Button onClick={this.handleAddClick.bind(this)} fab color="primary" aria-label="add">
            <AddIcon />
          </Button>
        </NutritionTable>
        {
          this.state.search === true
          &&
          <Search
            handleClose={this.handleSearchClose.bind(this)}
            addAliment={this.handleAddAliment.bind(this)}
          />
        }
      </div>
    )
  }
}

export default NutritionCalculator