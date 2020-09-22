import React, {useState} from 'react';

import SimulationField from './component/simulationField';
import FunctionButtons from './component/functionButtons';
import './App.css';
const defaultCoord = {rows: 5, columns: 5 }
function App() {
  const [coord, setCoord] = useState(defaultCoord)
  // console.log('Number(coord.row)', coord);
  
  return (
    <div className="App">
      <h1>Cellular Simulation</h1>
      <FunctionButtons setCoord={setCoord}/>
      <SimulationField rows={Number(coord.rows)} columns={Number(coord.columns)}/>
    </div>
  );
}

export default App;
