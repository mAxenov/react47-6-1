import { useState } from 'react';
import './App.css';
import Clock from './components/Clock';
import CreateClock from './components/CreateClock';


function App() {
  const [clocks, setClocks] = useState([]);

  const createClock = (clock) => {
    setClocks([...clocks, clock]);
  }

  const removeClock = (clock) => {
    setClocks((prevClock) => { return prevClock.filter(item => item.id !== clock.id) });
  }

  return (
    <div className="App">
      <CreateClock create={createClock} />
      <div className='clocks'>
        {clocks.map((item) => {
          return (<Clock key={item.id} timeZone={item.timeZone} name={item.name} remove={() => removeClock(item)} />);
        })}
      </div>
    </div>
  );
}

export default App;
