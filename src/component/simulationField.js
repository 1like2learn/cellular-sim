import React, { useState, useEffect } from 'react';
import addCell from '../helpers/addCell';

export default function SimulationField({rows, columns}){
  const [ grid, setGrid ] = useState({});
  console.log('grid', grid);
  
  useEffect(() => {
    let tempGrid = {}
    for(let i = 0; i < rows - 1; i++){
      for(let j = 0; j < columns - 1; j++){
        tempGrid = {...tempGrid, [`${j},${i}`]: addCell(j, i, tempGrid)}
      };
    };
    setGrid(tempGrid)
  }, [rows, columns])

  return(
    <div>
      <h2>test</h2>
      {Object.keys(grid).forEach( key => {
        return (
          <div>{key}</div>
        )
      })}
    </div>
  );
}