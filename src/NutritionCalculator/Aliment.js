import React from 'react'

import './Aliment.css'
import Button from 'material-ui/Button'
import DeleteIcon from 'material-ui-icons/Delete'

class Aliment extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      quantity: 100
    }
  }

  handleChangeQuantity (event) {
    this.setState({
      quantity: event.target.value
    })
    const value = event.target.value
    this.props.onQuantityChange(value)
  }

  handleDelete () {
    this.props.onDelete()
  }

  render () {
    const sanitizeValue = value => Math.round(value * this.state.quantity / 10) / 10

    const deleteStyle = {
      margin: 15
    }

    return (
      <tr className='Aliment' style={{backgroundColor: '#93CF8C'}}>
        <th colSpan={2}>
          <Button fab mini color="accent" onClick={this.handleDelete.bind(this)} aria-label="edit" style={deleteStyle}>
            <DeleteIcon />
          </Button>
        </th>
        <th>{this.props.data.name}</th>
        <th><input type="number" value={this.state.quantity} onChange={this.handleChangeQuantity.bind(this)}/> g</th>
        <th>{sanitizeValue(this.props.data.carbohydrate.sugar)} g</th>
        <th>{sanitizeValue(this.props.data.carbohydrate.total)} g</th>
        <th>{sanitizeValue(this.props.data.lipid.SFA)} g</th>
        <th>{sanitizeValue(this.props.data.lipid.o9)} g</th>
        <th>{sanitizeValue(this.props.data.lipid.o6)} g</th>
        <th>{sanitizeValue(this.props.data.lipid.o3)} g</th>
        <th>{sanitizeValue(this.props.data.lipid.total)} g</th>
        <th>{sanitizeValue(this.props.data.protein)} g</th>
        <th>{sanitizeValue(this.props.data.salt)} g</th>
        <th>{sanitizeValue(this.props.data.energy)} kcal</th>
      </tr>
    )
  }
}

export default Aliment