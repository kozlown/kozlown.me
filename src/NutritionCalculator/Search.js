import React from 'react'
import CloseIcon from 'material-ui-icons/Close'
import { parseString } from 'xml2js'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'

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

  componentDidMount () {
    const search = this
    const reqCiqualAlim = new XMLHttpRequest()
    reqCiqualAlim.open('GET', '/assets/data/ciqual_alim.xml', false)
    reqCiqualAlim.send(null)
    parseString(reqCiqualAlim.responseText, (err, res) => {
      if (err) {
        console.error(err)
      }
      search.ciqualAlim = res
    })
  }

  search (keyWords) {
    this.setState({
      results: this.ciqualAlim.TABLE.ALIM.filter(aliment => {
        return keyWords.toLowerCase().split(' ').every(keyword => {
          return aliment.alim_nom_index_fr.some(indexFr => {
            return indexFr.toLowerCase().includes(keyword)
          })
        })
      })
    })
  }

  render () {
    const results = this.state.results.map(result =>
      <div>
        <span>{result.alim_nom_fr}</span>
        <Button onClick={() => this.props.addAliment(result)} fab color="primary" aria-label="add">
          <AddIcon />
        </Button>
      </div>
    )

    return (
      <div className='Search'>
        <input autoFocus type="text" placeholder="Search food" onKeyPressCapture={this.handleKeyPress.bind(this)}/>
        <CloseIcon onClick={this.props.handleClose} style={{
          position: 'fixed',
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