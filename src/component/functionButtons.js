import React from 'react';
import { useform, useForm } from 'react-hook-form';
export default function FunctionButtons({setCoord}){
  const { handleSubmit, watch, errors } = useForm();
  return (
    <div>
      <form onSubmit ={handleSubmit(onSubmit)}>

      </form>

    </div>
  )
}