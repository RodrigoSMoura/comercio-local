import React from 'react';
import {Link} from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/comerciolocal_logo.svg'

export default function Register(){
    return (
        <div className="register-container">
             <div className="container">
                <section>
                    <img src={logoImg} alt="Comercio Local" />;
                    <h1>Cadastro</h1>
                    <p>Faça o seu cadastro e aguarde confirmação por e-mail ou telefone. Obrigado!</p>
                    <Link to="/" >
                       <FiArrowLeft size={16} color="#198045" /> 
                       Voltar ao Login
                    </Link>
                </section>
                <form to="/cadastrar/confirmacao">
                    <input placeholder="Nome do Comercio" />
                    <input type="text" placeholder="Comercio" />
                    <input type="email" placeholder="E-mail" />
                    <input type="phone" placeholder="Telefone" />
                    <input type="phone" placeholder="WhatsApp" />
                    
                    <div className="input-group">
                        <input placeholder="Cidade" />
                        <input placeholder="UF" style={{ width:80 }} />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
             </div>
        </div>
    )
}