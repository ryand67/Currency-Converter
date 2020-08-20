import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';

function App() {

  const [baseCurrency, setBase] = useState('USD');
  const [targetCurrency, setTarget] = useState('USD');
  const [convertAmount, setAmount] = useState(0);
  const [convertAnswer, setAnswer] = useState(0);

  const currencyList = ['USD', 'EUR', 'CAD', 'GBP', 'JPY', 'AUD', 'NZD'];

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  }

  const handleConvert = () => {
    axios.get(`https://api.exchangeratesapi.io/latest?base=${baseCurrency}&symbols=${targetCurrency}`)
    .then(res => {
      let obj = res.data.rates;
      let rate = obj[Object.keys(obj)[0]];
      let newAmount = convertAmount * rate;
      newAmount = newAmount.toFixed(2);
      setAnswer(newAmount);
    });
  }

  return (
    <div className="App">
      <h1>CURRENCY CONVERTER:</h1>
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
            {targetCurrency}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {currencyList.map(item => {
              return <Dropdown.Item key={item} onClick={() => setTarget(item)}>{item}</Dropdown.Item>
            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="inputDiv">
        <button className="convertButton" onClick={() => handleConvert()}>Convert</button>
        <input className="convertInput" placeholder="0" type="number" onChange={(e) => handleAmountChange(e)} />
      </div>
          <h1 className="convertedAmount">{convertAnswer} {targetCurrency}</h1>
    </div>
  );
}

export default App;
