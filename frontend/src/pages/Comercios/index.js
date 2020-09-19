import React from 'react';
import { Link } from 'react-router-dom';

// import api from '../../services/api';

import "./styles.css";

import logoImg from "../../assets/comerciolocal_logo.svg";

export default function Comercios(){
    

    return(
        <div className="comercios-container">
            <header>
                <img src={logoImg} alt="Comercio Local"/>
                <span>Bem vindo, NOME</span>

                <Link to="/">Quero participar!</Link>
            </header>
            <h1>Comercios</h1>
            <ul>
                <li>
                    <strong>Comercio</strong>
                    <p>Hotifrutaria</p>

                    <strong>Vendemos:</strong>
                    <p>Teste</p>

                    <strong>Contato</strong>
                    <p>email</p>
                    <p>telefones</p>

                    <button>Entrar Em Contato</button>
                </li>
                <li>
                    <strong>Comercio</strong>
                    <p>Hotifrutaria</p>

                    <strong>Vendemos:</strong>
                    <p>Teste</p>

                    <strong>Contato</strong>
                    <p>email</p>
                    <p>telefones</p>

                    <button>Entrar Em Contato</button>
                </li>
                <li>
                    <strong>Comercio</strong>
                    <p>Hotifrutaria</p>

                    <strong>Vendemos:</strong>
                    <p>Teste</p>

                    <strong>Contato</strong>
                    <p>email</p>
                    <p>telefones</p>
                    
                    <button>Entrar Em Contato</button>
                </li>
            </ul>
        </div>
    );
}