import React from 'react'

import './NutritionTable.css'
import Aliment from './Aliment'
import Total from './Total'
import { lightLight } from '../colors/base'

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
        key={id}
        onDelete={this.handleDelete(id)}
        onQuantityChange={this.handleQuantityChange(id)} data={aliment}
        style={{...id%2 === 1 && lightLight }}
      />
    )

    const carbohydratesColor = ''
    const lipidColor = ''
    const proteinColor = ''

    return (
      <div className='NutritionTable'>
        <div className='header strong'>
          <div style={{gridRow: '1 / 4', gridColumn: '1 / 3'}} className='grid-part align-center'>
            <div className='centered'>
              Actions
            </div>
          </div>
          <div style={{gridRow: '1 / 4', gridColumn: '3 / 5'}} className='grid-part align-center'>
            <div className='centered'>
              Aliment
            </div>
          </div>
          <div style={{gridRow: '1 / 4', gridColumn: '5 / 6'}} className='grid-part align-center'>
            <div className='centered'>
              Quantity
            </div>
          </div>
          <div style={{gridRow: '1 / 2', gridColumn: '6 / 8', backgroundColor: carbohydratesColor}} className='grid-part align-center'>Carbohydrate</div>
          <div style={{gridRow: '1 / 2', gridColumn: '8 / 13', backgroundColor: lipidColor}} className='grid-part align-center'>Lipid</div>
          <div style={{gridRow: '1 / 4', gridColumn: '13 / 14', backgroundColor: proteinColor}} className='grid-part align-center'>
            <div className='centered'>
              Protein
            </div>
          </div>
          <div style={{gridRow: '1 / 4', gridColumn: '14 / 15'}} className='grid-part align-center'>
            <div className='centered'>
              Salt
            </div>
          </div>
          <div style={{gridRow: '1 / 4', gridColumn: '15 / 16'}} className='grid-part align-center'>
            <div className='centered'>
              Energy
            </div>
          </div>

          <div style={{gridRow: '2 / 4', gridColumn: '6 / 7', backgroundColor: carbohydratesColor}} className='grid-part align-center'>
            <div className='centered'>
              Sugar
            </div>
          </div>
          <div style={{gridRow: '2 / 4', gridColumn: '7 / 8', backgroundColor: carbohydratesColor}} className='grid-part align-center'>
            <div className='centered'>
              Total
            </div>
          </div>
          <div style={{gridRow: '2 / 4', gridColumn: '8 / 9', backgroundColor: lipidColor}} className='grid-part align-center'>
            <div className='centered'>
              SFA
            </div>
          </div>
          <div style={{gridRow: '2 / 3', gridColumn: '9 / 10', backgroundColor: lipidColor}} className='grid-part align-center'>MFA</div>
          <div style={{gridRow: '2 / 3', gridColumn: '10 / 12', backgroundColor: lipidColor}} className='grid-part align-center'>
            PFA
          </div>
          <div style={{gridRow: '2 / 4', gridColumn: '12 / 13', backgroundColor: lipidColor}} className='grid-part align-center'>
            <div className='centered'>
              Total
            </div>
          </div>
          <div style={{gridRow: '3 / 4', gridColumn: '9 / 10', backgroundColor: lipidColor}} className='grid-part align-center'>o-9</div>
          <div style={{gridRow: '3 / 4', gridColumn: '10 / 11', backgroundColor: lipidColor}} className='grid-part align-center'>o-6</div>
          <div style={{gridRow: '3 / 4', gridColumn: '11 / 12', backgroundColor: lipidColor}} className='grid-part align-center'>o-3</div>
        </div>
        <div className='food'>
          {food}
        </div>
        <div className='footer strong'>
          {
            food.length > 0
              ?
              <Total onDeleteAll={this.props.onDeleteAll} food={this.props.food}/>
              :
              <div style={{margin: 30, gridRow: '4 / 6', gridColumn: '1 / 14'}}>
                No aliment added
                <span role='img' style={{marginLeft: 5}} aria-label='banana'>🍌</span>
              </div>
          }
        </div>
      </div>

    )
  }
}

export default NutritionTable