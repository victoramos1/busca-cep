import {useRef } from 'react'
import { useState } from 'react'

export default function Main(){

        let cepDigitado = useRef("")
        const [dadosCep, setDadosCep] = useState()

        function captarValorDigitado(e){
            setDadosCep(e.target.value)
                console.log(dadosCep)
        }

    return(
        <>
            <label htmlFor="input-cep">Digite um CEP válido:</label>
            <input type="text" placeholder="Digite aqui" id="input-cep" name="input-cep" ref={cepDigitado} onChange={captarValorDigitado}required></input>
            <button type="submit" onClick={captarValorDigitado}>Buscar</button>
            
            <h1>Endereço:</h1>
            <h3>Rua Sao Paulo</h3>
            <h3>Barueri</h3>
            <h3>Sao Paulo</h3>
            <h3>Brasil</h3>
        </>
    )
}