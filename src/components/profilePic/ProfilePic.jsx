import React from 'react'

const ProfilePic = ({ width, src }) => {
  return (
    <img src={src} alt="#" style={{height: width, width: width, borderRadius: "50%"}} />
  )
}

export default ProfilePic