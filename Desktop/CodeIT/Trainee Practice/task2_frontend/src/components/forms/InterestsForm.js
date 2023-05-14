import React from 'react'

const InterestsForm = ({interest}) => {
  return (
    <>
    <label htmlFor={interest}>{interest}</label>
    <input id={interest} type='checkbox' value={interest}/>
    </>
  )
}

export default InterestsForm