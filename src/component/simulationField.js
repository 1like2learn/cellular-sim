import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import addCell from '../helpers/addCell';


const SimField = styled.div`
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    div {
      margin: 0;
      justify-content: center;

      img {
        height: 1px;
        width: 1px;
        padding: 50%;
      }
    }
  }
`;

export default function SimulationField({rows, columns}){
  const [ grid, setGrid ] = useState({});
  const [rowsArray, setRowsArray] = useState([]);
  
  useEffect(() => {
    let tempGrid = {}
    let tempRowArray = []
    for(let i = 0; i < rows; i++){
      let rowArray = []
      for(let j = 0; j < columns; j++){
        tempGrid = {...tempGrid, [`${i},${j}`]: addCell(i, j, tempGrid)}
        rowArray.push(`${i},${j}`)
      };
      tempRowArray.push(rowArray)
    };
    setRowsArray(tempRowArray)
    setGrid(tempGrid)

  }, [rows, columns])

  const updateGrid = (item) => {
    const newGrid = { ...grid };
    newGrid[item].toggleAlive();
    setGrid(newGrid);
  }
  return(
    <SimField>
      <div>
        {rowsArray.map( row => {
          return row.map( item => {
            return(
              <div key = {item}
                onClick={() => updateGrid(item)}
                style = {grid[item].alive? {backgroundColor: "darkgray"}: {backgroundColor: "white"}, {width: `${90/(rows)}%`}}
              >
                <img src = "../data/1x1px.png" alt = ""/>
              </div>
            )
          })
        })}
      </div>
    </SimField>
  );
}