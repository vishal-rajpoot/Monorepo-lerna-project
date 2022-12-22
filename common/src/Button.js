import React from 'react'

export const Button = ({color, text}) => {
  return (
    <div>
        <h4>{text}</h4>
        <button style={color}>Hello from Common button = {text}</button>
    </div>
  )
}
