import React from 'react'
import { StyledInput } from './InputElement'

const Input = ({type, placeholder, value}) => {
  return (
    <StyledInput  type={type} placeholder={placeholder} />
  )
}

export default Input