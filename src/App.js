import { useState } from 'react';
import './App.css';
import MainMint from './MainMint';
import NavBar from './NavBar';
//0x74Af55c7c369303c1003dd1Bb1B8B05D58ba4159

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
  <div className='overlay'>
    <div className="App">
      <NavBar accounts={accounts} setAccounts={setAccounts} />
      <MainMint accounts={accounts} setAccounts={setAccounts} />
    </div>
    <div className='background'></div>
  </div>
  );
}

export default App;