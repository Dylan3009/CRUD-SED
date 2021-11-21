import { useState } from 'react';
import Axios from 'axios';
import './App.css';

function App() {

  const [countryName, setCountryName] = useState('');

  const addToList = () => {
    Axios.post("http://localhost:3001/insert", {
      countryName: countryName,
    });
  };

  return (
    <div>
      <div className="source-game">
        <label className="label_text">Agregar Pais:</label>
        <input type="text"
          className="input_text" onChange={(event) => {
            setCountryName(event.target.value);
          }}
        ></input>
        <div className="div-button">
          <button className="send-button" 
            onClick ={addToList}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
