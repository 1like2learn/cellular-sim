import React from 'react';
import { useForm } from 'react-hook-form';

export default function SimFieldSizeForm({setCoord}){
  // define react hook form functions
  const { register, handleSubmit, errors } = useForm();

  // take the coords from the form and put them in the coord state
  const onSubmit = (data) => {
    
    setCoord({
      rows: data.rows,
      columns: data.columns
    });
  };

  return (
    <div>
      <form onSubmit ={handleSubmit(onSubmit)}>
        <label>Number of Rows</label>
        <input
          //create an input that will throw an error if it's not a positive whole number and is handled by react hook forms
          name = "rows"
          ref = {register({
            required: true,
            pattern: /^[1-9]\d*\.?[0]*$/
          })}
          type = "number"
        />
        {errors.row && <span>Please enter a positive whole number.</span>}
        <label>Number of Columns</label>
        <input 
          //create an input that will throw an error if it's not a positive whole number and is handled by react hook forms
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
  );
};