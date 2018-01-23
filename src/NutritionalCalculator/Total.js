import React from 'react'
import _ from 'lodash'
import deepKeys from 'deep-keys'
import Button from 'material-ui/Button'
import DeleteIcon from 'material-ui-icons/Delete'

import './Total.css'
import { strongStrong } from '../colors/base'

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
      margin: 20,
      ...strongStrong
    }

    return (
      <div className='Total'>
        <div style={{gridColumn: '1 / 3'}}>
          <Button raised onClick={this.handleDeleteAll.bind(this)} aria-label="delete" style={deleteAllStyle}>
            Delete all
            <DeleteIcon />
          </Button>
        </div>
        <div style={{gridColumn: '3 / 5'}}>TOTAL</div>
        <div>{total.quantity} g</div>
        <div>{total.carbohydrate.sugar} g</div>
        <div>{total.carbohydrate.total} g</div>
        <div>{total.lipid.SFA} g</div>
        <div>{total.lipid.o9} g</div>
        <div>{total.lipid.o6} g</div>
        <div>{total.lipid.o3} g</div>
        <div>{total.lipid.total} g</div>
        <div>{total.protein} g</div>
        <div>{total.salt} g</div>
        <div>{total.energy} kcal</div>
      </div>
    )
  }
}

export default Total