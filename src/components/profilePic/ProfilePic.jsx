import React from 'react'

const ProfilePic = ({ width, src }) => {
  return (
    <img src={src} alt="#" style={{aspectRatio: "1/1", width: width, borderRadius: "50%"}} />
  )
}

export default ProfilePic