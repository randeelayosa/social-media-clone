import React from 'react'
import Profile from './Profile'
import Bio from './Bio'
import Feed from './Feed'
import Subscribe from './Subscribe'

function Body() {
  const bodyStyle = {
    height: '90vh',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 1fr',
    gridTemplateRows: 'repeat(8,1fr)',
    gridGap: '20px 15px',
    padding: '10px'
  }
  return (
    <div style={bodyStyle}>
      <Profile/>
      <Bio/>
      <Feed/>
      <Subscribe/>
    </div>
  )
}

export default Body
