import React from 'react'
import deepKeys from 'deep-keys'
import _ from 'lodash'

import './NutritionTable.css'
import Aliment from './Aliment'

class NutritionTable extends React.Component {
  render () {
    const food = this.props.food.map(aliment => <Aliment data={aliment}/>)

    const sumObjects = (objects) => {
      return Array.from(objects).reduce((a, b) => {
        deepKeys(b).forEach(key => {
          _.set(a, key, Math.round(((_.get(a, key) || 0) + _.get(b, key)) * 10) / 10)
        })
        return a
      }, {})
    }

    const totalValues = sumObjects(this.props.food)
    totalValues.name = 'TOTAL'
    const total = <Aliment data={totalValues}/>

    return (
      <table border={1} className='NutritionTable'>
        <thead>
          <tr>
            <th rowSpan={3}>Aliment</th>
            <th rowSpan={3}>Quantity</th>
            <th colSpan={2}>Carbohydrate</th>
            <th colSpan={5}>Lipid</th>
            <th rowSpan={3}>Protein</th>
            <th rowSpan={3}>Energy</th>
          </tr>
          <tr>
            <th rowSpan={2}>Sugar</th>
            <th rowSpan={2}>Total</th>
            <th rowSpan={2}>SFA</th>
            <th>MFA</th>
            <th colSpan={2}>PFA</th>
            <th rowSpan={2}>Total</th>
          </tr>
          <tr>
            <th>o-9</th>
            <th>o-6</th>
            <th>o-3</th>
          </tr>
        </thead>
        <tbody>
          {food}
          <tr>
            <th colSpan={11} style={{textAlign: 'center', padding: '15px'}}>
              {this.props.children}
            </th>
          </tr>
          {food.length > 0 ? total : ''}
        </tbody>
      </table>
    )
  }
}

export default NutritionTable