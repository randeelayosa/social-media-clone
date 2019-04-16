import React from 'react'

function Feed() {
  const feedStyle = {
    border: '2px solid blue',
    backgroundColor: '#a9a9a9',
    gridColumn: '2 / 3',
    gridRow: '1 / 8'

  }
  return (
    <div style={feedStyle}>
      <h1>Feed</h1>
    </div>
  )
}

export default Feed
