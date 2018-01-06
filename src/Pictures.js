import React from 'react'

import './Pictures.css'
import Picture from './Picture'
import urls from './picturesData.json'

const NUMBER_OF_PICTURES_LOADING = 3

class Pictures extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.state.numberOfLoadedPictures = 0
    this.state.urls = urls.slice(0, NUMBER_OF_PICTURES_LOADING)
  }

  updatePictures () {
    if (this.state.urls.length % NUMBER_OF_PICTURES_LOADING === 0) {
      this.setState({
        urls: urls.slice(0, this.state.urls.length + NUMBER_OF_PICTURES_LOADING)
      })
    }
  }

  render () {
    const embeds = this.state.urls.map(({link, image}) => {
      return <Picture onLoadEnd={this.updatePictures.bind(this)} key={link} link={link} image={image}/>
    })

    return (
      <div className='Pictures'>
        {embeds}
      </div>
    )
  }
}
export default Pictures