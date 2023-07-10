import React from 'react'

function Heading(props) {
  return (
    <div>
        Heading 

        <h1>{props.title}</h1>
        <h1>{props.context}</h1>
        <h1>{props.price}</h1>

    </div>
  )
}

export default Heading;