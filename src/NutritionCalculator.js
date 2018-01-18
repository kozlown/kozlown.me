import React from 'react'
import Button from 'material-ui/Button'
import SearchIcon from 'material-ui-icons/Search'

import './NutritionCalculator.css'
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
      <div className='NutritionCalculator'>
        <Button onClick={this.handleAddClick.bind(this)} fab color="primary" aria-label="search" className='searchButton'>
          <SearchIcon />
        </Button>
        <NutritionTable food={this.state.food} onQuantityChange={this.handleQuantityChange.bind(this)} />
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