import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

class CadastraLivros extends Component{
    state = {
        livro:{
            id: this.state.livro.id,
            isbn: this.state.livro.isbn,
            titulo: this.state.livro.titulo,
            autor: this.state.livro.autor
        },
        redirecionar: false
    };

    handleLivroForm = e => {
        e.preventDefault();
        this.props.inserirLivro(this.state.livro);
        this.setState({redirecionar: true});
    };
    
    render (){
        if (this.state.redirecionar === true){
            return <Redirect to="/"/>;
        }
        return(
            <form onSubmit={this.handleLivroForm}>
                <h1>Cadastrar Livros</h1>
                <p>
                    <label htmlFor='fisbn'>
                        ISBN: Formato - (<span style={{color: "red"}}>978-85-7522-XXX-X</span>)
                    </label>
                    <input  type="text" 
                            autoFocus
                            defaultValue={this.props.isbn} 
                            id="fisbn" 
                            required 
                            pattern='^978-85-7522-[0-9]{3}-[0-9]{1}$' 
                            value={this.state.livro.isbn} 
                            onChange={ e => 
                                this.setState({
                                    livro: {
                                        ...this.state.livro,
                                        isbn: e.target.value
                                    }
                                })
                            }
                    />
                </p>
                <p>
                    <label htmlFor='ftitulo'>Título</label>
                    <input  type="text" 
                            defaultValue={this.props.titulo} 
                            ref="titulo" 
                            id='ftitulo' 
                            required
                            value={this.state.livro.titulo}
                            onChange={e =>
                                this.setState({
                                    livro:{
                                        ...this.state.livro,
                                        titulo: e.target.value
                                    }
                                })
                            }

                    />
                </p>
                <p>
                    <label htmlFor='fautor'>Autor</label>
                    <input  type="text" 
                            defaultValue={this.props.autor}
                            ref="autor"
                            id='fautor' 
                            required
                            value={this.state.livro.autor}
                            onChange={ e=>
                                this.setState({
                                    livro:{
                                        ...this.state.livro,
                                        autor: e.target.value
                                    }
                                })
                            }
                    />
                </p>
                <p>
                    <button type='submit' className='botao cadastrar'>Cadastrar</button>
                </p>

            </form>
        );
    }
};

export default CadastraLivros;
