import React from 'react'
import _ from 'lodash'
import deepKeys from 'deep-keys'
import Button from 'material-ui/Button'
import DeleteIcon from 'material-ui-icons/Delete'

import './Total.css'

class Total extends React.Component {
  handleDeleteAll () {
    this.props.onDeleteAll()
  }

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

    const deleteAllStyle = {
      fontFamily: 'Roboto',
      fontSize: 15,
      textTransform: 'uppercase',
      margin: 20
    }

    return (
      <tr className='Total' style={{backgroundColor: '#699C98'}}>
        <th colSpan={2}>
          <Button raised color="accent" onClick={this.handleDeleteAll.bind(this)} aria-label="delete" style={deleteAllStyle}>
            Delete all
            <DeleteIcon />
          </Button>
        </th>
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
        <th>{total.salt} g</th>
        <th>{total.energy} kcal</th>
      </tr>
    )
  }
}

export default Total