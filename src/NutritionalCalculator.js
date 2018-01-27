import React from 'react'
import Button from 'material-ui/Button'
import SearchIcon from 'material-ui-icons/Search'
import ExportIcon from 'material-ui-icons/FileDownload'
import Download from 'react-download-link'

import _ from 'lodash'

import './NutritionalCalculator.css'
import NutritionTable from './NutritionalCalculator/NutritionTable'
import Search from './NutritionalCalculator/Search'
import getNutrients from './models/Nutrients'
import { strongStrong } from './colors/base'

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

  handleDelete (id) {
    const food = [...this.state.food]

    _.remove(food, (n, index) => index === id)

    this.setState({
      food
    })
  }

  handleDeleteAll() {
    this.setState({
      food: []
    })
  }

  render () {
    return (
      <div className='NutritionCalculator'>
        <Button onClick={this.handleAddClick.bind(this)} fab aria-label="search" style={strongStrong} className='searchButton'>
          <SearchIcon/>
        </Button>
        <Download filename={'nutrients.json'} exportFile={() => JSON.stringify(this.state.food)}>
          <Button fab aria-label="export" style={strongStrong} className='exportButton'>
            <ExportIcon/>
          </Button>
        </Download>
        <NutritionTable
          food={this.state.food}
          onDelete={this.handleDelete.bind(this)}
          onDeleteAll={this.handleDeleteAll.bind(this)}
          onQuantityChange={this.handleQuantityChange.bind(this)} />
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