import { useState, useRef } from "react"
import './Main.css'

function Main() {

  const [resultado, setResultado] = useState("")
  let cepDigitado = useRef('')

  async function buscaEndereco() {
    await fetch(`https://viacep.com.br/ws/${cepDigitado.current.value}/json/`)
      .then(retorno => retorno.json())
      .then(dados => setResultado(dados))
      .catch(err => console.log('Erro no retorno da API'))
    formataResultado()
  }

  function formataResultado() {
    if(resultado === ""){
      return <h3>Aguardando resultado</h3>
    } else if (resultado.logradouro === "" && resultado.bairro === "") {
      return <h3>{resultado.localidade}/{resultado.uf}</h3>
    } else if (resultado.logradouro === "") {
      return <h3>{resultado.bairro} - {resultado.localidade}/{resultado.uf}</h3>
    } else if (resultado.bairro === "") {
      return <h3>{resultado.logradouro} - {resultado.localidade}/{resultado.uf}</h3>
    } else {
      return <h3>{resultado.logradouro}, {resultado.bairro} - {resultado.localidade}/{resultado.uf}</h3>
    }
  }

  return (
    <div className="containerNativo">
      <h1 className="titulo">Busca CEP</h1>
      <div className="containerElementos">
        <label htmlFor="input-cep">Digite um CEP válido:</label>
        <input type="text" placeholder="Digite aqui" id="input-cep" name="input-cep" ref={cepDigitado} required></input>
        <button type="submit" onClick={buscaEndereco}>Buscar</button>
        {formataResultado()}
      </div>
    </div>
  )
}

export default Main