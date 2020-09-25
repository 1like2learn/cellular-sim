import React from 'react'
import { useForm } from 'react-hook-form';

export default function SimSpeedForm({setSimSpeed}){
  const { register, handleSubmit } = useForm();

const onSubmit = (data) => {
  setSimSpeed(Number(data.simSpeed))
}

  return (
  <form>
    <select
      name = "simSpeed" 
      ref = {register()}
    >
      <option value ="1000">1 time a second</option>
      <option value ="500">2 times a second</option>
      <option value ="200">5 times a second</option>
    </select>
      <button type = "submit" onClick = {handleSubmit(onSubmit)}>Set Simulation Speed</button>
  </form>
  )
}