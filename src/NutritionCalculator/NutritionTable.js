import React from 'react'

import './NutritionTable.css'
import Aliment from './Aliment'
import Total from './Total'

class NutritionTable extends React.Component {
  handleQuantityChange(id) {
    return (quantity) => {
      this.props.onQuantityChange(id, quantity)
    }
  }

  handleDelete(id) {
    return () => this.props.onDelete(id)
  }

  render () {
    const food = this.props.food.map((aliment, id) =>
      <Aliment
        onDelete={this.handleDelete(id)}
        onQuantityChange={this.handleQuantityChange(id)} data={aliment}
      />
    )

    return (
      <table border={1} className='NutritionTable'>
        <thead>
          <tr>
            <th rowSpan={3}>Actions</th>
            <th rowSpan={3}>Aliment</th>
            <th rowSpan={3}>Quantity</th>
            <th colSpan={2}>Carbohydrate</th>
            <th colSpan={5}>Lipid</th>
            <th rowSpan={3}>Protein</th>
            <th rowSpan={3}>Salt</th>
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
          {food.length > 0 ? <Total food={this.props.food}/> : ''}
        </tbody>
      </table>
    )
  }
}

export default NutritionTable