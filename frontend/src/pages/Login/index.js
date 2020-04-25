import React from 'react';

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
                    <a href="/cadastrar" >
                        Não tenho cadastro
                    </a>
                </form>
            </section>
            <img src={comercioItemsImg} alt="Comercio" />
        </div>
    );
}