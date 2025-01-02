import axios from 'axios';
import {BallTriangle} from 'react-loader-spinner'
import { useState } from 'react'
import './App.css'

function App() {
    const [inputValue, setInputValue] = useState(null)
    const [loading, setLoading] = useState(false)
    const [address, setAddress] = useState([])
    console.log(address);
    

    function fetchAddress() {
        setLoading(true)
        axios.get(`https://viacep.com.br/ws/${inputValue}/json/`)
        .then((data) => setAddress((prevState) => [...prevState, data.data]))
        .catch((error) => console.log(error))
        

        setTimeout(() => {
            setLoading(false)
        }, 3000)


    }
    

    return (
        <>
            <div id='loading'>
                <BallTriangle
                    height={100}
                    width={100}
                    radius={5}
                    color="#4fa94d"
                    ariaLabel="ball-triangle-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={loading}
                
                />
            </div>

            <div id='container'>
            
                <h1>Busca cep</h1>
            
                <input type="text" placeholder='Digite seu cep' onChange={(e) => setInputValue(e.target.value) } maxLength={8}/>
                <button onClick={() => fetchAddress()}>BUSCAR</button>
            
                <table>
                    <thead>
                        <tr>
                            <th>CEP</th>
                            <th>BAIRRO</th>
                            <th>DDD</th>
                            <th>ESTADO</th>
                            <th>LOCALIDADE</th>
                            <th>LOGRADOURO</th>
                            <th>REGIÃO</th>
                            <th>UF</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            address.map((address) => (
                                <tr>
                                    <td>{address.cep}</td>
                                    <td>{address.bairro}</td>
                                    <td>{address.complemento}</td>
                                    <td>{address.ddd}</td>
                                    <td>{address.estado}</td>
                                    <td>{address.localidade}</td>
                                    <td>{address.logradouro}</td>
                                    <td>{address.regiao}</td>
                                    <td>{address.uf}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default App
