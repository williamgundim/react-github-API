import React, {Component  } from 'react';
import './App.css';
import './css/pure-min.css';
import './css/layouts/side-menu.css';

class App extends Component {
  
  constructor(){

    super();
    this.state = { lista: [{nome:'william', email:'william.gundim@gmail.com' }]  };

  }

  render(){
  
    return (
      <div id="layout">
        <a href="#menu" id="menuLink" className="menu-link">
          <span></span>
        </a>

        <div id="menu">
            <div className="pure-menu">
                <a className="pure-menu-heading" href="#cadastro">Cadastros</a>

                <ul className="pure-menu-list">
                    <li className="pure-menu-item"><a href="#home" className="pure-menu-link">Home</a></li>
                    <li className="pure-menu-item"><a href="#autor" className="pure-menu-link">Autor</a></li>
                    <li className="pure-menu-item"><a href="#livros" className="pure-menu-link">Livros</a></li>
                </ul>
            </div>
        </div>

    
        <div id="main">
          <div className="header">
            <h1>Cadastro de Autores</h1>
          </div>
          <div className="content" id="content">
            <div className="pure-form pure-form-aligned">
              <form className="pure-form pure-form-aligned">
                <div className="pure-control-group">
                  <label htmlFor="nome">Nome</label> 
                  <input id="nome" type="text" name="nome" value=""  />                  
                </div>
                <div className="pure-control-group">
                  <label htmlFor="email">Email</label> 
                  <input id="email" type="email" name="email" value=""  />                  
                </div>
            
                <div className="pure-control-group">
                  <label htmlFor="senha">Senha</label> 
                  <input id="senha" type="password" name="senha"  />                                      
                </div>
            
                <div className="pure-control-group">                                  
                  <label></label> 
                  <button type="submit" className="pure-button pure-button-primary">Gravar</button>                                    
                </div>
              </form>             

            </div>  
            
            <div>            
              <table className="pure-table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>email</th>
                  </tr>
                </thead>
                
                <tbody>
                  {

                      this.state.lista.map( (list)=>{                       
                        return (
                          <tr>
                            <td> {list.nome} </td>
                            <td>{list.email } </td>
                          </tr>
                      );
                    })

                  }
                </tbody>
              </table> 
            </div>             
      </div>
      </div>
  </div>
    );
  } 
}

export default App;
