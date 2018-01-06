import React from 'react'
import CloseIcon from 'material-ui-icons/Close'

import './Search.css'

class Search extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='Search'>
        <input autoFocus type="text" placeholder="Search food"/>
        <CloseIcon onClick={this.props.handleClose} style={{
          position: 'fixed',
          cursor: 'pointer',
          right: 10,
          top: 10,
          width: 75,
          height: 75,
          color: 'white'
        }}/>
      </div>
    )
  }
}

export default Search