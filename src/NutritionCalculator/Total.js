import React from 'react'
import _ from 'lodash'
import deepKeys from 'deep-keys'

import './Total.css'

class Total extends React.Component {
  render () {
    const sumObjects = (objects) => {
      return Array.from(objects).reduce((a, b) => {
        deepKeys(b).forEach(key => {
          const accumulator = _.get(a, key) || 0
          const quantityFactor = key === 'quantity' ? 1 : b.quantity / 100
          const currentValue = _.get(b, key) * quantityFactor
          _.set(a, key, Math.round((accumulator + currentValue) * 10) / 10)
        })
        return a
      }, {})
    }

    const total = sumObjects(this.props.food)

    return (
      this.props.food.length > 0 ?
      <tr className='Total' style={{backgroundColor: '#699C98'}}>
        <th>TOTAL</th>
        <th>{total.quantity} g</th>
        <th>{total.carbohydrate.sugar} g</th>
        <th>{total.carbohydrate.total} g</th>
        <th>{total.lipid.SFA} g</th>
        <th>{total.lipid.o9} g</th>
        <th>{total.lipid.o6} g</th>
        <th>{total.lipid.o3} g</th>
        <th>{total.lipid.total} g</th>
        <th>{total.protein} g</th>
        <th>{total.energy} kcal</th>
      </tr>
        :
      <tr className='Total' style={{backgroundColor: '#ffab40'}}>
        <th>TOTAL</th>
        <th>... g</th>
        <th>... g</th>
        <th>... g</th>
        <th>... g</th>
        <th>... g</th>
        <th>... g</th>
        <th>... g</th>
        <th>... g</th>
        <th>... g</th>
        <th>... kcal</th>
      </tr>
    )
  }
}

export default Total