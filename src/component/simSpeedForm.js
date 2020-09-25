import React from 'react'
import styled from 'styled-components'

const SpeedForm = styled.form`
  margin: 4%;
`;

export default function SimSpeedForm({setSimSpeed}){
  return (
  <SpeedForm>
    <select>
      <option onClick = {() => setSimSpeed(1000)}>1 time a second</option>
      <option onClick = {() => setSimSpeed(500)}>2 times a second</option>
      <option onClick = {() => setSimSpeed(200)}>5 times a second</option>
    </select>
  </SpeedForm>
  )
}