import React, { useState } from 'react';
import Cell from '../helpers/cells'

export default function SimulationField({row, column}){
  const [ grid, setGrid ] = useState({})
  let c = 0;
  let r = 0;
  let tempGrid = {}
  while (r < row){
    if (r === 0) {
      const tempCell = Cell(r, c)
      tempCell.tL = false
      tempCell.t = false
      tempCell.tR = false
      tempCell.l = false
      tempCell.Bl = false
      tempGrid[`${r}${c}`] = tempCell
    }
    else if(r === row - 1){
      const tempCell = Cell(r, c)
      tempCell.tL = false
      tempCell.t = false
      tempCell.tR = false
      tempCell.r = false
      tempCell.bR = false
      tempCell.l = tempGrid[`${r-1}${c}`]
      tempGrid[`${r}${c}`] = tempCell
    }
    else{
      const tempCell = Cell(r, c)
      tempCell.tL = false
      tempCell.t = false
      tempCell.tR = false
      tempCell.bR = false
      tempCell.l = tempGrid[`${r-1}${c}`]
      tempGrid[`${r}${c}`] = tempCell
      tempGrid[`${r-1}${c}`].r = tempCell
    }
  };

  return(
    <div>

    </div>
  );
}