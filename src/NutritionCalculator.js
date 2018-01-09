import React from 'react'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import { parseString } from 'xml2js'

import './About.css'
import NutritionTable from './NutritionCalculator/NutritionTable'
import Search from './NutritionCalculator/Search'

class NutritionCalculator extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      search: false,
      food: []
    }
  }

  componentDidMount () {
    const calculator = this
    const reqCiqualCompo = new XMLHttpRequest()
    console.info("coucou")
    reqCiqualCompo.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
          console.info("coucou")
          parseString(reqCiqualCompo.responseText, (err, res) => {
            console.info("coucou")
            if (err) {
              console.error(err)
            }
            calculator.ciqualCompo = res.TABLE.COMPO
          })
        } else {
          console.log("Status de la réponse: %d (%s)", this.status, this.statusText)
        }
      }
    }
    reqCiqualCompo.open('GET', '/assets/data/ciqual_compo.xml', true)
    reqCiqualCompo.send(null)
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
    this.setState({
      food: this.state.food.concat([aliment])
    })
  }

  render () {
    const food = this.state.food.map(aliment => {
      const composition = this.ciqualCompo.filter(element => element.alim_code[0] === aliment.alim_code[0])
      const nutrient = const_code =>
        Math.round(
          parseFloat(composition.find(element => element.const_code[0].trim() === const_code)
            .teneur[0]
            .replace(',','.')
          ) * 10
        ) / 10 || 0
      return {
        name: aliment.alim_nom_fr,
        quantity: 100,
        carbohydrate: {
          sugar: nutrient('32000'),
          total: nutrient('31000')
        },
        lipid: {
          SFA: nutrient('40302'),
          o3: nutrient('41833') + nutrient('42053') + nutrient('42263'),
          o6: nutrient('41826') + nutrient('42046'),
          o9: nutrient('41819'),
          total: nutrient('40000')
        },
        protein: nutrient('25000'),
        energy: nutrient('328')
      }
    })

    return (
      <div className='RecipeCreator'>
        <NutritionTable food={food}>
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