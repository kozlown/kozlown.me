import React from 'react'

import './Aliment.css'
import Button from 'material-ui/Button'
import DeleteIcon from 'material-ui-icons/Delete'
import { strongStrong } from '../colors/base'

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
      margin: 15,
      ...strongStrong
    }

    return (
      <React.Fragment>
        <div className='grid-part light' style={{gridColumn: '1 / 3', ...this.props.style}}>
          <Button fab mini onClick={this.handleDelete.bind(this)} aria-label="edit" style={deleteStyle}>
            <DeleteIcon />
          </Button>
        </div>
        <div className='grid-part light' style={{gridColumn: '3 / 5', ...this.props.style}}>
          {this.props.data.name}
          </div>
        <div className='grid-part light' style={this.props.style}>
          <input type="number" value={this.state.quantity} onChange={this.handleChangeQuantity.bind(this)}/> g
        </div>
        <div className='grid-part light' style={this.props.style}>
          {sanitizeValue(this.props.data.carbohydrate.sugar)} g
        </div>
        <div className='grid-part light' style={this.props.style}>
          {sanitizeValue(this.props.data.carbohydrate.total)} g
        </div>
        <div className='grid-part light' style={this.props.style}>
          {sanitizeValue(this.props.data.lipid.SFA)} g
        </div>
        <div className='grid-part light' style={this.props.style}>
          {sanitizeValue(this.props.data.lipid.o9)} g
        </div>
        <div className='grid-part light' style={this.props.style}>
          {sanitizeValue(this.props.data.lipid.o6)} g
        </div>
        <div className='grid-part light' style={this.props.style}>
          {sanitizeValue(this.props.data.lipid.o3)} g
        </div>
        <div className='grid-part light' style={this.props.style}>
          {sanitizeValue(this.props.data.lipid.total)} g
        </div>
        <div className='grid-part light' style={this.props.style}>
          {sanitizeValue(this.props.data.protein)} g
        </div>
        <div className='grid-part light' style={this.props.style}>
          {sanitizeValue(this.props.data.salt)} g
        </div>
        <div className='grid-part light' style={this.props.style}>
          {sanitizeValue(this.props.data.energy)} kcal
        </div>
      </React.Fragment>
    )
  }
}

export default Aliment