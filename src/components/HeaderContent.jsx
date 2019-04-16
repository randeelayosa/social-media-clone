import React from 'react'

function HeaderContent(){
  const headerContentStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '40%',
    marginLeft: '1%'
  }
  const headerTabStyle = {
    border: '2px solid lightGray',
    padding: '5% 7%'
  }

  return (
    <div style={headerContentStyle}>
      <p style={headerTabStyle}>Home</p>
      <p style={headerTabStyle}>Notifications</p>
      <p style={headerTabStyle}>Messages</p>
    </div>
  )
}

export default HeaderContent
