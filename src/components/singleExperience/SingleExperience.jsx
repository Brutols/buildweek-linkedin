import React from 'react'
import ProfilePic from '../profilePic/ProfilePic'
import Headings from '../headings/Headings'

const SingleExperience = ({title, company, startDate, endDate, description}) => {
  return (
    <div className="border-bottom d-flex py-3 gap-2">
        <ProfilePic width="32px" src="https://placehold.it/32x32" />
        <div>
            <Headings variant="h3" text={title} />
            <Headings variant="p" text={company} />
            <Headings variant="p06" text={`${startDate} - ${endDate}`} />
            <Headings variant="p06" text={description} />
        </div>
    </div>
  )
}

export default SingleExperience