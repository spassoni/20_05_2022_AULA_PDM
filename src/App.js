import logo from './logo.svg';
import './App.css';
//()=>
//nome - criarContrato
//recebe: nome e valor
//devolve: um JSON com type = CRIAR_CONTRATO e payload igual a um JSON com nome e valor


function App() {

   const criarContrato = (nome, valor) =>{
      return {
        type : "CRIAR_CONTRATO",
        payload : {
            nome, valor
        } 
      }
   }  

//function regular (usar function)
//cancelarContrato
//recebe : nome
// devolve: um JSON com type = CANCELAR_CONTRATO e payload igual a um JSON com nome

const cancelarContrato = (nome) =>{
  return {
    type : "CANCELAR_CONTRATO",
    payload : {
        nome
    } 
  }
} 
// uma função criadora de ação para solicitação de cashback
const SolicitarCashBack = (valor, nome) =>{
  return {
    type : "SOLICITAR_CASHBACK",
    cashback : {
        valor, nome
    } 
  }
} 
  return (
    <div className="App">

    </div>
  );
}

export default App;
