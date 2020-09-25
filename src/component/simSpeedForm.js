import React from 'react'

export default function SimSpeedForm({setSimSpeed}){

const onSubmit = (data) => {
  setSimSpeed(Number(data.simSpeed))
}

  return (
  <form>
    <select>
      <option onClick = {() => setSimSpeed(1000)}>1 time a second</option>
      <option onClick = {() => setSimSpeed(500)}>2 times a second</option>
      <option onClick = {() => setSimSpeed(200)}>5 times a second</option>
    </select>
  </form>
  )
}