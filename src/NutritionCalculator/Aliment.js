import React from 'react'

import './Aliment.css'

class Aliment extends React.Component {
  render () {
    return (
      <tr className='Aliment' style={{backgroundColor: '#ffab40'}}>
        <th>{this.props.data.name}</th>
        <th>{this.props.data.quantity} g</th>
        <th>{this.props.data.carbohydrate.simple} g</th>
        <th>{this.props.data.carbohydrate.complex} g</th>
        <th>{this.props.data.carbohydrate.total} g</th>
        <th>{this.props.data.lipid.SFA} g</th>
        <th>{this.props.data.lipid.o9} g</th>
        <th>{this.props.data.lipid.o6} g</th>
        <th>{this.props.data.lipid.o3} g</th>
        <th>{this.props.data.lipid.total} g</th>
        <th>{this.props.data.protein} g</th>
        <th>{this.props.data.energy} kcal</th>
      </tr>
    )
  }
}

export default Aliment