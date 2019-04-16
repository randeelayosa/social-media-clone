import React from 'react'

function Profile() {
  const profileStyle = {
    border: '2px solid blue',
    backgroundColor: '#a9a9a9',
    gridColumn: '1 / 2',
    gridRow: '1 / 3'
  }
  return (
    <div style={profileStyle}>
      <h1>Profile</h1>
    </div>
  )
}

export default Profile
