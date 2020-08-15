import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import Dropdown from 'react-bootstrap/Dropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

function App() {

  const [baseCurrency, setBase] = useState('USD');
  const [convertAmount, setAmount] = useState(0);

  const currencyList = ['USD', 'EUR', 'CAD'];

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  }

  return (
    <div className="App">
      <div className="dropdownDiv">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {baseCurrency}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {currencyList.map(item => {
              return <Dropdown.Item key={item} onClick={() => setBase(item)}>{item}</Dropdown.Item>
            })}
          </Dropdown.Menu>
        </Dropdown>

        <i className="fas fa-arrow-right"></i>

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {baseCurrency}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {currencyList.map(item => {
              return <Dropdown.Item key={item} onClick={() => setBase(item)}>{item}</Dropdown.Item>
            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="inputDiv">
        <button className="convertButton">Convert</button>
        <input className="convertInput" placeholder="0" type="number" onChange={(e) => handleAmountChange(e)} />
      </div>
    </div>
  );
}

export default App;
