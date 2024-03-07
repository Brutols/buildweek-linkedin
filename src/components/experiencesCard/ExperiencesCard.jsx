import React from 'react'
import Headings from '../headings/Headings'
import ButtonIcon from '../buttonIcon/ButtonIcon'
import SingleExperience from '../singleExperience/SingleExperience'
import AddExperience from '../addExperience/AddExperience'

const ExperiencesCard = () => {

  return (
    <div className='rounded bg-white d-flex flex-column p-3'>
        <div className="d-flex justify-content-between align-items-center">
            <Headings variant="h2" text="Experience" />
            <div className="d-flex">
                <AddExperience />
                <ButtonIcon iconName="HiOutlinePencil"/>
            </div>
        </div>
        <SingleExperience />
    </div>
  )
}

export default ExperiencesCard