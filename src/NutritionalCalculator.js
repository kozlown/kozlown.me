import React from 'react'
import Button from 'material-ui/Button'
import SearchIcon from 'material-ui-icons/Search'
import ExportIcon from 'material-ui-icons/FileDownload'
import ImportIcon from 'material-ui-icons/FileUpload'
import Download from 'react-download-link'
import FileInput from 'react-file-reader'

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

  componentWillMount () {
    try {
      const food = JSON.parse(localStorage.getItem('food'))

      if (food) {
        this.setState({
          food
        })
      }
    } catch (e) {
      console.error(e)
    }
  }

  componentWillUpdate (nextProps, nextState) {
    localStorage.setItem('food', JSON.stringify(nextState.food))
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

  handleImportFile (files) {
    const reader = new FileReader()
    reader.onloadend = () => {
      try {
        const food = JSON.parse(reader.result)
        this.setState({
          food
        })
      } catch (e) {
        console.error(e)
      }
    }
    reader.readAsText(files[0])
  }

  render () {
    return (
      <div className='NutritionCalculator'>
        <Button onClick={this.handleAddClick.bind(this)} fab aria-label="search" style={strongStrong} className='searchButton menuButton'>
          <SearchIcon/>
        </Button>
        <Download style={{width: 0, height: 0}} filename={'nutrients.json'} exportFile={() => JSON.stringify(this.state.food)}>
          <Button fab aria-label="export" style={strongStrong} className='exportButton menuButton'>
            <ExportIcon/>
          </Button>
        </Download>
        <FileInput fileTypes={[".json"]} base64={false} multipleFiles={false} handleFiles={this.handleImportFile.bind(this)}>
          <Button fab aria-label="export" style={strongStrong} className='importButton menuButton'>
            <ImportIcon/>
          </Button>
        </FileInput>
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