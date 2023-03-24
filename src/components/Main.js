//import { useEffect } from "react"
import { useState, useRef } from "react"

export default function Main(){
    
        const [resultado, setResultado] = useState('')
        let cepDigitado = useRef('')

        function buscar(){
            fetch(`https://viacep.com.br/ws/${cepDigitado.current.value}/json/`)
            .then(retorno => retorno.json())
            .then(dados => setResultado(dados))
            .catch(err => console.log('Erro no retorno da API'))
            console.log(resultado)
        }
    
    return(
        <>
            <h1>{resultado.logradouro}</h1>
            <h1>{resultado.localidade}</h1>
            <h1>{resultado.bairro}</h1>
            <h1>{resultado.cep}</h1>
            <label htmlFor="input-cep">Digite um CEP válido:</label>
            <input type="text" placeholder="Digite aqui" id="input-cep" name="input-cep" ref={cepDigitado} required></input>
            <button type="submit" onClick={buscar}>Buscar</button>
            
        </>
    )
}