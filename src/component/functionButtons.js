import React from 'react';
import { useForm } from 'react-hook-form';
export default function FunctionButtons({setCoord}){
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    
    setCoord({
      rows: data.rows,
      columns: data.columns
    })
  }
  return (
    <div>
      <form onSubmit ={handleSubmit(onSubmit)}>
        <label>Define Grid Dimensions</label>
        <input
          name = "rows"
          ref = {register({
            required: true,
            pattern: /^[1-9]\d*\.?[0]*$/
          })}
          type = "number"
        />
        {errors.row && <span>Please enter a positive whole number.</span>}
        <input 
          name = "columns" 
          ref = {register({
            required: true,
            pattern: /^[1-9]\d*\.?[0]*$/
          })}
          type = "number"
        />
        {errors.column && <span>Please enter a positive whole number.</span>}
        <button type = "submit">Define Grid Size</button>
      </form>
    </div>
  )
}