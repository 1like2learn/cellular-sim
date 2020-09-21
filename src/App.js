import React, {useState} from 'react';

import SimulationField from './component/simulationField';
import FunctionButtons from './component/functionButtons';
import './App.css';
const defaultCoord = {row: 0, column: 0 }
function App() {
  const [coord, setCoord] = useState(defaultCoord)
  
  return (
    <div className="App">
      <h1>Cellular Simulation</h1>
      <SimulationField row={coord.row} column={coord.column}/>
      <FunctionButtons setCoord={setCoord}/>
    </div>
  );
}

export default App;
