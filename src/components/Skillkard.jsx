import React from 'react'

const Skillkard = ({category, name}) => {
  return (
    <div className=' flex flex-col items-center '>
        <i class={`fa-${category} fa-${name} fa-3x`}></i>
        <span>
            {name}
        </span>
    </div>
  )
}

export default Skillkard