import React, {useState} from 'react';

import SimulationField from './component/simulationField';
import SimFieldSizeForm from './component/simFieldSizeForm';
import SimControls from './component/simControls';

import './App.css';

const defaultCoord = {rows: 10, columns: 10};

function App() {
  // Dimension the dimensions of the simulation field
  const [ coord, setCoord ] = useState(defaultCoord);
  // Dim a list of cells that could need to change
  const [ checkLivingSet, setCheckLivingSet ] = useState(new Set())
  // Dim a grid of cells that will be displayed
  const [ grid, setGrid ] = useState({})
  
  // Add a cell and it's mates to the set of cells to check
  const addCellToCheckLivingSet = (cell) => {
    // Dim a tempCell to refer to instead of writing grid[cell]
    const tempCell = grid[cell]
    // Create a temporary set we will update state with
    const tempSet = checkLivingSet
    // If current cell is not in the set add it
    if (!tempSet.has(tempCell)){
      tempSet.add(tempCell)
    };
    // Loop through the current cell's mates and add them
    // to the set if they aren't there already.
    tempCell.mates.forEach( mate => {
      if (!tempSet.has(mate)) {
        tempSet.add(mate)
      };
    });
    // Update checkLiving set state
    setCheckLivingSet(tempSet);
  }

  return (
    <div className="App">
      <h1>Cellular Simulation</h1>
      
      <SimFieldSizeForm setCoord={setCoord}/>

      <SimControls
        grid = {grid}
        setGrid = {setGrid}
        checkLivingSet = {checkLivingSet}
        setCheckLivingSet = {setCheckLivingSet}
        addCellToCheckLivingSet = {addCellToCheckLivingSet}
      />
      <SimulationField
        addCellToCheckLivingSet = {addCellToCheckLivingSet}
        rows={Number(coord.rows)}
        columns={Number(coord.columns)}
        grid = {grid}
        setGrid = {setGrid}
      />
    </div>
  );
};

export default App;
