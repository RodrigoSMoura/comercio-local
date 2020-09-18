import React from 'react';
import {Link} from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import comercioItemsImg from '../../assets/comercioitens.png'
import logoImg from '../../assets/comerciolocal_logo.svg'

export default function Login(){
    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Comercio Local"/>

                <form>
                    <h1>Faça seu login</h1>
                    <input placeholder="Sua Id"/>
                    <button type="submit">Entrar</button>
                    <Link to="/cadastrar" >
                       <FiLogIn size={16} color="#198045" /> 
                       Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={comercioItemsImg} alt="Comercio" />
        </div>
    );
}