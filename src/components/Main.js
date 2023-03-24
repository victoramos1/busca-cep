import { useState, useRef } from "react"
import styles from './Main.module.css'

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
        <div className={styles.containerNativo}>
            <h1>Busca CEP</h1>
            <div className={styles.containerElementos}>
            <label htmlFor="input-cep">Digite um CEP válido:</label>
            <input type="text" placeholder="Digite aqui" id="input-cep" name="input-cep" ref={cepDigitado} required></input>
            <button type="submit" onClick={buscar}>Buscar</button>
            <h3>{resultado.logradouro}, {resultado.bairro} - {resultado.localidade}/{resultado.uf}</h3>
            </div>
            
        </div>
    )
}