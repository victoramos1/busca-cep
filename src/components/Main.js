import { useState, useRef } from "react"
import styles from './Main.module.css'

export default function Main(){
    
        const [resultado, setResultado] = useState('Aguardando resultado')
        let cepDigitado = useRef('')

        function buscar(){
            fetch(`https://viacep.com.br/ws/${cepDigitado.current.value}/json/`)
            .then(retorno => retorno.json())
            .then(dados => setResultado(<h3>{dados.logradouro}, {dados.bairro} - {dados.localidade}/{dados.uf}</h3>))
            .catch(err => console.log('Erro no retorno da API'))
        }

    return(
        <div className={styles.containerNativo}>
            <h1>Busca CEP</h1>
            <div className={styles.containerElementos}>
                <label htmlFor="input-cep">Digite um CEP válido:</label>
                <input type="text" placeholder="Digite aqui" id="input-cep" name="input-cep" ref={cepDigitado} required></input>
                <button type="submit" onClick={buscar}>Buscar</button>
                <h3>{resultado}</h3>
            </div>    
        </div>
    )
}