import React from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './Pictures.css'
import urls from './picturesData.json'

const embeds = urls.map(({ link, image }) =>
  <a href={link} target="_">
    <GridTile key={image} padding={0}>
        <img src={image} alt="" />
    </GridTile>
  </a>
)

const Pictures = () => (
  <div className='Pictures'>
    <MuiThemeProvider>
      <GridList cellHeight={"auto"} padding={20} cols={3}>
        {embeds}
      </GridList>
    </MuiThemeProvider>
  </div>
)
export default Pictures