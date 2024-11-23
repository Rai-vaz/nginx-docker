import axios from 'axios';
import { useState } from 'react'
import './App.css'

function App() {
    const [inputValue, setInputValue] = useState(null)
    console.log(inputValue);

    function fetchAddress() {
        axios.get(`https://viacep.com.br/ws/${inputValue}/json/`)
        .then((data) => console.log(data.data))
        .catch((error) => console.log(error))
        
    }
    

  return (
    <div id='container'>
      <h1>Busca cep</h1>
      
          <input type="text" placeholder='Digite seu cep' onChange={(e) => setInputValue(e.target.value) } maxLength={8}/>
          <button onClick={() => fetchAddress()}>BUSCAR</button>
      
    </div>
  )
}

export default App
