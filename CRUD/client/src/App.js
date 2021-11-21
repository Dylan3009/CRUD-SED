import { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';

function App() {

  const [countryName, setCountryName] = useState('');

  const [countryList, setCountryList] = useState([]);

  const [newCountryName, setNewCountryName] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      setCountryList(response.data);
    });
  }, []);

  const addToList = () => {
    Axios.post("http://localhost:3001/insert", {
      countryName: countryName,
    });
  };

  const updateCountry = (id) => {
    Axios.put("http://localhost:3001/update", {
      id: id,
      newCountryName: newCountryName,
    });
  };

  const deleteCountry = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`);
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
            onClick={addToList}
          >
            Create
          </button>
        </div>

        <h1>Country Names</h1>

        {countryList.map((val, key) => {
          return (
            <div key={key}>
              <h1>{val.countryName}</h1>
              <input className="input_text"
                type="text" placeholder="New Country"
                onChange={(event) => {
                  setNewCountryName(event.target.value);
                }}
              />
              <button className="send-button"
                onClick={() => updateCountry(val._id)}
              >
                Update
              </button>
              <button className="send-button"
                onClick={() => deleteCountry(val._id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
