import React from 'react'
import ProfilePic from '../profilePic/ProfilePic'
import Headings from '../headings/Headings'

const SingleExperience = () => {
  return (
    <div className="border-bottom d-flex py-3 gap-2">
        <ProfilePic width="32px" src="https://placehold.it/32x32" />
        <div>
            <Headings variant="h3" text="Test Lavoro" />
            <Headings variant="p" text="test azienda" />
            <Headings variant="p06" text="gen 2020 - feb 2022" />
            <Headings variant="p06" text="test location, Milano ecc" />
        </div>
    </div>
  )
}

export default SingleExperience