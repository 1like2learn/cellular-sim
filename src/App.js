import React, {useState} from 'react';

import SimulationField from './component/simulationField';
import FunctionButtons from './component/functionButtons';
import './App.css';
const defaultCoord = {row: 10, column: 10 }
function App() {
  const [coord, setCoord] = useState(defaultCoord)
  console.log('coord', coord);
  
  return (
    <div className="App">
      <h1>Cellular Simulation</h1>
      <FunctionButtons setCoord={setCoord}/>
      <SimulationField rows={Number(coord.row)} columns={Number(coord.column)}/>
    </div>
  );
}

export default App;
