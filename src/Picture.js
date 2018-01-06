import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { Preload } from 'react-preload'
import { CircularProgress } from 'material-ui'

import './Picture.css'

const Picture = props => {
  const style = {
    backgroundImage: `url(${props.image}`
  }

  const loading = (
    <div className="Picture">
      <CircularProgress/>
    </div>
  )

  return (
    <Preload
      images={[props.link]}
      loadingIndicator={loading}
      onSuccess={props.onLoadEnd}
      >
      <a href={props.link} target="_" className="Picture" style={style}>
        <div className="instagram-layer">
          <SocialIcon url={props.link} color="black"/>
        </div>
      </a>
    </Preload>
  )
}

export default Picture