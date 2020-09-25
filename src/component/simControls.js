import React, { useState, useEffect } from 'react';

export default function SimControls({checkLivingSet, setCheckLivingSet, grid, setGrid, addCellToCheckLivingSet, simSpeed}){
  const [ myInterval, setMyInterval ] = useState();
  const [ generation, setGeneration ] = useState(0);
  const [ simRunning, setSimRunning ] = useState(false);

  const clearLivingSet = () => {
    const tempGrid = {...grid};
    checkLivingSet.forEach((cell) => {
      cell.color = "#d4f1f4";
      cell.alive = false;
    });
    setCheckLivingSet(new Set())
    setGrid(tempGrid)
    setGeneration(0)
  }
  // If simRunning changes
  let iterations = 0
  useEffect(() => {
    if (simRunning) {
      iterations = 0;
      // Run this code every half second
      setMyInterval(setInterval( () => {
        // Create a copy of grid state
        const tempGrid = {...grid};
        // Create a temporary list of cells to change once the loop is complete
        const tempListOfCellsToChange = [];
        // Loop through the set of cells that may need to be changed
        checkLivingSet.forEach( cell => {
          // Simulate cell growth and store the returned value
          const simulationResult = cell.simulate();
          // If the value is defined the state of the cell needs to be changed,
          // add it to the list
          if (simulationResult) {
            tempListOfCellsToChange.push(simulationResult);
          };
          if (tempListOfCellsToChange.length === 0) {
            clearInterval(myInterval)
          }
        });
        
        // Loop through each cell coordinate and toggle it's state
        tempListOfCellsToChange.forEach( cellCoord => {
          grid[cellCoord].toggleAlive();
        // Then if the cell is alive add it and it's mates to the list of cells
        // to check
          if (grid[cellCoord].alive) {
            addCellToCheckLivingSet(cellCoord);
          };
        });
        // Reset the grid state so the dom updates
        setGrid(tempGrid);

        // Iterate Generation
        iterations++
        setGeneration(iterations)
      }, simSpeed));
    // things that should be in the dependency array but will break it
    }//, setCheckLivingSet, checkLivingSet, addCellToCheckLivingSet, grid
  }, [simRunning, setGrid]);

  return(
    <div>
      <button
      // Only display the play button if sim is not running
        style = {{display: simRunning? 'none': 'inline-block'}}
        // Run sim onclick
        onClick = {() => setSimRunning(true)}
      >Play</button>
      <button
      // Only display button if sim is running
        style = {{display: simRunning? 'inline-block': 'none'}}
        onClick = {() => (setSimRunning(false), clearInterval(myInterval))}
      >Pause</button>
      <button onClick = {() => (clearLivingSet(), clearInterval(myInterval), setSimRunning(false))}>Clear</button>
      <div>Generation: {generation}</div>
    </div>
  );
};