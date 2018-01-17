import React from 'react'
import CloseIcon from 'material-ui-icons/Close'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import axios from 'axios'

import './Search.css'

class Search extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      results: []
    }
  }

  handleKeyPress (e) {
    if (e.key === 'Enter') {
      this.search(e.target.value)
    }
  }

  search (keyWords) {
    const search = this
    axios.get(`http://localhost:3001/search?keywords=${keyWords}`)
      .then(response => {
        search.setState({
          results: response.data
        })
      })
  }

  render () {
    const results = this.state.results.map(result =>
      <div>
        <span>{result.alim_nom_eng}</span>
        <Button onClick={() => this.props.addAliment(result)} fab color="primary" aria-label="add">
          <AddIcon />
        </Button>
      </div>
    )

    return (
      <div className='Search'>
        <input autoFocus type="text" placeholder="Search food" onKeyPressCapture={this.handleKeyPress.bind(this)}/>
        <CloseIcon onClick={this.props.handleClose} style={{
          position: 'absolute',
          cursor: 'pointer',
          right: 10,
          top: 10,
          width: 75,
          height: 75,
          color: 'white'
        }}/>
        <div className='results'>
          {results}
        </div>
      </div>
    )
  }
}

export default Search