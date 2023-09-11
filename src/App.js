import "./style.css";
import React , {useState} from 'react';

function App() {

const [random ,setRandom] = useState(25);
const [minval ,setMinval] = useState(20);
const [maxval ,setMaxval] = useState(30);

const giveNumber = () => {
  setRandom( Math.floor(Math.random()*(maxval-minval +1 ) + minval))
}



  return (

    <div className="hero">

      <div className="container">

        <div className="randomNum">
          <p>Random Number <span>{random} </span> </p>
        </div>

        <div className="numContainer">

          <div>
          <p>Min:</p>
          <input type="number"
          value={minval}
          onChange={e => setMinval(+e.target.value)}
          />
          </div>

          <div>
          <p>Max:</p>
          <input type="number"
          value={maxval}
          onChange={ (e) => { // Normal Func Çalışmıyor
            setMaxval(+e.target.value)
          }}
          />
          </div>
          
        </div>

      <button onClick={giveNumber}>Get Random Number</button>

      </div>

    </div>

  );
}

export default App;
