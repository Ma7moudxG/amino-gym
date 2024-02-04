import React from 'react'

export default function Button(props) {
    const {text} = props
  return (
    <button className="px-10 py-4 mx-auto rounded-md border-[2px] yellowShadow border-yellow-400 border-solid duration-200 ">
           {text} 
    </button>
  )
}
