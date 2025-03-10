import logo from './logo.svg';
import './App.css';
import { useCallback, useState } from 'react';
import CopyTracker from './CopyTracker';

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [pass, setpass] = useState("")
  const copiedText = window.getSelection().toString()

  const passGenerator = useCallback(() => {
    console.log(numberAllowed);
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (charAllowed) str = str + "!@#$%^&*-_+=[]{}~`"
    if (numberAllowed) str = str + "0123456789"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    setpass(pass)
  }, [length, numberAllowed, charAllowed, setpass])
  return (
    <div className="App">
      <CopyTracker />
      <div className='container'>
        <h1>Password Generator</h1>
        <input type='text' className='display_password' value={pass} readOnly /><br />
        <div className="number">
          <input type="checkbox" name="Numbers" onChange={(e) => setnumberAllowed(e.target.checked)} />
          <lable>Numbers</lable><br />
        </div>
        <div className="char">
          <input type="checkbox" name="Spe_char" onChange={(e) => setcharAllowed(e.target.checked)} />
          <lable>Charachter</lable>
        </div>
        <div className="length">
          <label>Length : {length} </label>
          <input type='range' min={6} max={100} value={length} onChange={(e) => setlength(e.target.value)} />
        </div>
        <button className='btn' onClick={passGenerator}>Generate Password</button>
        <button className='btn' onClick={() => { navigator.clipboard.writeText(pass) }}>Copy</button>
      </div>
    </div>
  );
}



export default App;
