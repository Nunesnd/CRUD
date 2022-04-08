import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => (
    <>
        <h1>404!</h1>
        <p>
            Este página não existe ou foi removida <br />
            <Link to="/">Voltar par a tabela de livros</Link>
        </p>
    </>
);

export default NotFound;