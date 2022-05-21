import logo from './logo.svg';
import './App.css';
import { Reducer } from 'redux';
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
//arrow function
//historicoDePedidosCashbackReducer
//recebe uma falta de estado sobre a qual operar(uma lista chamada
//historicoDePedidosCashback. Por padrao, ela é uma lista vazia)
//recebe uma ação
//detalhe: somente operar no estado se o type for apropiado
//detalhe 2: obrigatorio usar o spread(..)
const historicoDePedidosCashbackReducer = (historicoDePedidosCashback=[], acao) =>{
  if(acao.type === "CASHBASH"){
    return
      [...historicoDePedidosCashbackReducer, acao.payload]
  }
  return historicoDePedidosCashbackReducer
}
//implementar o reducer que manuipula o caixa
//o caixa começa zerado
const caixaReducer = (valorEmCaixa=0, acao) =>{
  if(acao.type === "SOLICITAR CASHBACK") return valorEmCaixa- acao.payload.valor
  if(acao.type === "CRIAR_CONTRATO") return valorEmCaixa + acao.payload.valor
  return valorEmCaixa
}
//implemetar o reducer que lida  com a lista de contratos
//ele pode criar contrato e cancelar contratos

contratoReducer = (contratos) =>{
  if(acao.type === "CANCELAR_CONTRATO") return cancelarContrato(contratos)
  if(acao.type === "CRIAR_CONTRATO") return criarContrato(contratos)
}
  return (
    <div className="App">

    </div>
  );
}

export default App;
