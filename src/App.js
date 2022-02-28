import Datafatch from './API/Datafatch';
import { useState } from "react";
import './App.css';

function App() {
  const [img,setimg] = useState(
    <div>
      <img className='img' src='https://dog.ceo/img/dog-api-logo.svg'></img>
    </div>
  )

  return (
    <div className="App">
      <Datafatch setimg={setimg} img="img" />
      {img}
    </div>
  );
}

export default App;
