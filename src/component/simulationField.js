import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import addCell from '../helpers/addCell';


const SimField = styled.div`
  width: 100%;
  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    div{
        display: flex;
        width: 100%;
        flex-direction: row;
        border: 0;
      
      div {
        margin: 0;
        justify-content: center;
  
        img {
          height: 1px;
          width: 1px;
          padding: 50%;
          border: black 1px solid;
        }
      }
    }
  }
`;

export default function SimulationField({grid, setGrid, rows, columns, addCellToCheckLivingSet}){
  // Dim an array of rows to make creating the simulation Field easier
  const [ rowsArray, setRowsArray ] = useState([]);
  
  // Use Effect only updates when the Rows or Columns state updates
  useEffect(() => {
    // Dim a temporary grid to update grid state with
    let tempGrid = {};
    // Dim a temporary array to update rows array state with
    let tempRowsArray = [];
    // Loop while i is less than rows
    for(let i = 0; i < rows; i++){
      // Dim an array for each row
      let rowArray = [];
      // Loop while j is less than columns
      for(let j = 0; j < columns; j++){
        // Add a cell at the current row and column coords and add it to the current row array
        tempGrid = {...tempGrid, [`${i},${j}`]: addCell(i, j, tempGrid)};
        rowArray.push(`${i},${j}`);
      };
      // Add array to the array of rows
      tempRowsArray.push(rowArray);
    };
    // For every cell in the grid find it's mates
    Object.keys(tempGrid).forEach(cell => tempGrid[cell].getMates());
    // Update state
    setRowsArray(tempRowsArray);
    setGrid(tempGrid);

  }, [rows, columns]);

  // Update grid and Cells to check state when a user clicks on a cell
  const updateGrid = (cellCoord) => {
    const newGrid = { ...grid };
    newGrid[cellCoord].toggleAlive();
    if (newGrid[cellCoord].alive) {
      newGrid[cellCoord].color = "#05445e"
    } else {
      newGrid[cellCoord].color = "#d4f1f4"
    }
    setGrid(newGrid);
    addCellToCheckLivingSet(cellCoord);
  };

  return(
    <SimField>
      <div>
        {/* Return a row array for every item in rowsArray */}
        {rowsArray.map( row => {
          // Return a square cell for every cell in a row
          
          return (
            <div key = {`Row: ${row[0]}`}>
              {row.map( cellCoord => {
                return(
                  <div key = {cellCoord}
                  // Change the color of the cell depending on if it's alive
                    onClick={() => updateGrid(cellCoord)}
                    style = {{
                      backgroundColor: `${grid[cellCoord].color}`,
                      width: `${90/(rows)}%`
                    }}
                  >
                    {/* <div>{cell}</div> */}
                    <img src = "../data/1x1px.png" alt = ""/>
                  </div>
                )
              })}
            </div>
          
          )
        })}
      </div>
    </SimField>
  );
};