import React, {Component} from 'react';
import Menu from "./components/Menu";
import TabelaLivros from './components/TabelaLivros';

class App extends Component{

  state = {
    livros: [
      
      {
        id: 1,
        isbn: "978-85-7522-403-8",
        titulo: "HTML 5 - 2ª Edição",
        autor: "Mauricio Maujor "
      },

      {
        id: 2,
        isbn: "978-85-7522-807-4",
        titulo: "Introduçao ao Pentest",
        autor: "Daniel Moreno"
      },

      {
        id: 3,
        isbn: "978-85-7522-780-8",
        titulo: "Internet das coisas para desenvolvedores",
        autor: "Ricardo Ogliari"
      }
      
    ]
  };

  render (){
    return(
      <div className='App'> 
        <Menu />
        <TabelaLivros livros={this.state.livros}/>
      </div>
    );
  }
}

export default App;
