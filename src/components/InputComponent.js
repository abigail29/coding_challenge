import React from 'react'

const InputComponent = (props) => {

  return (
    <label>
      <input
            className = "money"
            type="number"
            onChange={props.handleChange}
            value={props.value}
             />
    </label>
  )
}

export default InputComponent;
