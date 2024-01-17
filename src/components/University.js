import React from 'react'

const University = ({match}) =>{
const {params} = match;
const university = params.university
  return (
    <div>
        <h2>University Name : {university}</h2>
    </div>

  )
}

export default University