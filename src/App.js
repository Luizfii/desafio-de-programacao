import React, { Component } from 'react';
import './App.css';
import api from './api';

class App extends Component {

  state={
    orcamentos: [],

  }
  async componentDidMount(){
    const response = await api.get('');
    this.setState({ orcamentos: response.data})
  }

  render() {

    const { orcamentos } = this.state;

    return (
      <div className="App">
        <div>
          <div className='App-header'>
          <h1>Oficina App</h1>
          <h2>Orçamentos</h2>
          </div>
          <tr>
          <td className='id'> Id</td>
          <td className='comprador'>Nome dos Clientes</td>
          <td className='valor'> Valor</td>
          <td className='vendedor'>Nome do Vendedor</td>
          </tr>
         {orcamentos.map(orcamento => (

          <div className='dados'> 
            <tr>
           <td className='id' key= {orcamento.id}>
             {orcamento.id}
           </td>
            <td className='comprador' id='btn'key = {orcamento.customer}>
             {orcamento.customer}
            </td>
            
            <td className='valor' key = {orcamento.value}>
              {orcamento.value} 
            </td> 
            
            <td className='vendedor' key = {orcamento.seller}>
             {orcamento.seller} 
            </td>  
            </tr>
          </div>
        ))}
        
        </div>
      </div>
     
    ); 
}
}
function acao(){
  let modal = document.querySelector(".modal")
  modal.style.display = "block";
}
function fechar(){
  let modal = document.querySelector(".modal")
  modal.style.display = "none";
}
export default App;
