import React from 'react'
import deepKeys from 'deep-keys'
import _ from 'lodash'

import './Table.css'

class Table extends React.Component {
  render () {
    const food = this.props.food.map(aliment => <tr>
        <th>{aliment.name}</th>
        <th>{aliment.quantity}</th>
        <th>{aliment.carbohydrate.simple}</th>
        <th>{aliment.carbohydrate.complex}</th>
        <th>{aliment.carbohydrate.total}</th>
        <th>{aliment.lipid.SFA}</th>
        <th>{aliment.lipid.o9}</th>
        <th>{aliment.lipid.o6}</th>
        <th>{aliment.lipid.o3}</th>
        <th>{aliment.lipid.total}</th>
        <th>{aliment.protein}</th>
        <th>{aliment.energy}</th>
      </tr>
    )

    const sumObjects = (objects) => {
      return Array.from(objects).reduce((a, b) => {
        deepKeys(b).forEach(key => {
          _.set(a, key, (_.get(a, key) || 0) + _.get(b, key))
        })
        return a;
      }, {});
    }

    const totalValues = sumObjects(this.props.food)
    console.info(totalValues)
    const total = <tr>
      <th>TOTAL</th>
      <th>{totalValues.quantity}</th>
      <th>{totalValues.carbohydrate.simple}</th>
      <th>{totalValues.carbohydrate.complex}</th>
      <th>{totalValues.carbohydrate.total}</th>
      <th>{totalValues.lipid.SFA}</th>
      <th>{totalValues.lipid.o9}</th>
      <th>{totalValues.lipid.o6}</th>
      <th>{totalValues.lipid.o3}</th>
      <th>{totalValues.lipid.total}</th>
      <th>{totalValues.protein}</th>
      <th>{totalValues.energy}</th>
    </tr>

    return (
      <div className='Table'>
        <table border={1}>
          <thead>
            <tr>
              <th rowSpan={3}>Aliment</th>
              <th rowSpan={3}>Quantity</th>
              <th colSpan={3}>Carbohydrates</th>
              <th colSpan={5}>Lipids</th>
              <th rowSpan={3}>Protein</th>
              <th rowSpan={3}>Energy</th>
            </tr>
            <tr>
              <th rowSpan={2}>Simple</th>
              <th rowSpan={2}>Complex</th>
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
            {total}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table