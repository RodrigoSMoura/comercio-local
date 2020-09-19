import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';

import api from "../../services/api";

import './styles.css';

import logoImg from '../../assets/comerciolocal_logo.svg'

export default function Register(){
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const [estados, setEstados] = useState([]);
    const [cidades, setCidades] = useState([]);

    const history = useHistory();

    useEffect(()=> {
        api.get("/states").then(response => {
            let estados = [];
            response.data.forEach(element => {
                estados.push({
                    value: element.sigla,
                    label: element.sigla
                });
            });
            setEstados(estados);
        });

    }, []); // Executado apenas uma vez

    useEffect(()=> {
        if (uf === '') return;
        
        api.get(`/states/${uf}/cities`).then(response => {
            let cidades = [];
            response.data.forEach(e => {
                cidades.push({
                    value: e.id,
                    label: e.name
                });
            });
            setCidades(cidades);
        });
    }, [uf]); // Executado toda vez que o 'uf' for alterado.

    async function handleRegister(e){        
        e.preventDefault();
        const data = {
                name,
                description,
                email,
                whatsapp,
                phone,
                city
        };

        try
        {
            const response = await api.post('/comercios', data);

            alert(`Seu Id de acesso: ${response.data.id}`);

            history.push('/');
        } catch (err) {
            alert('Ocorreu um erro. Tente novamente.');            
        }
    }

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
                <form onSubmit={handleRegister}>
                    <input type="text" placeholder="Comercio" value={name} onChange={e => setName(e.target.value) } />
                    <textarea type="text" placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value) } />
                    <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value) } />
                    <input type="phone" placeholder="Telefone" value={phone} onChange={e => setPhone(e.target.value) } />
                    <input type="phone" placeholder="WhatsApp" value={whatsapp} onChange={e => setWhatsapp(e.target.value) } />
                    
                    <div className="input-group">
                        <Select options={cidades} placeholder="Cidade" onChange={e => setCity(e.value) } />
                        <Select options={estados} style={{ width:80 }} onChange={e => setUf(e.value) } />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
             </div>
        </div>
    )
}