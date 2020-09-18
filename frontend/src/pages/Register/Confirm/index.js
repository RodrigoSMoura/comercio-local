import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';

import logoImg from '../../../assets/comerciolocal_logo.svg'

export default function Confirm(){
    return(
        <div className="confirm-container">
            <img src={logoImg} alt="Comercio Local" />
            
            <div style={{text_align:"center"}}>
                <p>Seu cadastro foi concluído.</p>
                <p>Em breve entraremos em contato!</p>
            </div>

            <Link to="/" >
                <FiArrowLeft size={16} color="#198045" /> 
                Voltar ao Login
            </Link>
        </div>
    )
}