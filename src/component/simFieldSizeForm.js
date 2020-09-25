import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const SizeForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    padding: 2%;
  }
  button {
    width: 30%;
    padding: 0.5%;
    margin: 1%;
  }
`;

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
    <SizeForm>
      <label>Number of Rows:&nbsp;
        <input
          //create an input that will throw an error if it's not a positive whole number and is handled by react hook forms
          name = "rows"
          ref = {register({
            required: true,
            pattern: /^[1-9]\d*\.?[0]*$/
          })}
          type = "number"
        />
        {errors.rows && <span>Please enter a positive whole number.</span>}
      </label>
      <label>Number of Columns:&nbsp;
        <input 
          //create an input that will throw an error if it's not a positive whole number and is handled by react hook forms
          name = "columns" 
          ref = {register({
            required: true,
            pattern: /^[1-9]\d*\.?[0]*$/
          })}
          type = "number"
        />
        {errors.columns && <span>Please enter a positive whole number.</span>}
      </label>
      <button type = "submit" onClick = {handleSubmit(onSubmit)}>Define Simulation Bounds</button>
    </SizeForm>
  );
};