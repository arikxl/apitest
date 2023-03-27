import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import { getData } from './service/api';

function App() {

  const [array, setArray] = useState([])

  useEffect(() => {
    const data = getData();
    // setArray(data)
    console.log('data:', array)
  },[])


  return (
    <div className="App">
      API
      {array &&  array.length}
      
      <div className="wrapper">
        <select>
          <option>a</option>
          <option>b</option>
          <option>c</option>
        </select>

      </div>
    </div>
  );
}

export default App;
