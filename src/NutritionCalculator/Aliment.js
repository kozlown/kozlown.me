import React from 'react'

import './Aliment.css'

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

  render () {
    const sanitizeValue = value => Math.round(value * this.state.quantity / 10) / 10

    return (
      <tr className='Aliment' style={{backgroundColor: '#93CF8C'}}>
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