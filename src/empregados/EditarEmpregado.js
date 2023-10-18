import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function EditarEmpregado() {

    const urlBase = "http://localhost:8080/rh-app/empregados";

    const {id} = useParams();

    const [empregado, setEmpregado] = useState({
        nome: '',
        departamento: '',
        saldo: ''
    });

    // quando entrar em um componente
    useEffect(() => {
        carregarEmpregado();
    }, []);

    const carregarEmpregado = async () => {
        const result = await axios.get(`${urlBase}/${id}`);
        setEmpregado(result.data);
    }

    let navegacao = useNavigate();

    const {nome, departamento, saldo} = empregado;

    const onInputChange = (e) => {
        setEmpregado({...empregado, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`${urlBase}/${id}`, empregado);
        navegacao('/');
    };

  return (
    <div className='container'>
        <div className='container text-center' style={{margin: "30px"}}>
            <h3>Edtar Empregado</h3>
        </div>
        <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome</label>
                <input type="text" className="form-control" id="nome" name='nome'
                    value={nome} onChange={(e) => onInputChange(e)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="departamento" className="form-label">Departamento</label>
                <input type="text" className="form-control" id="departamento" name='departamento'
                    value={departamento} onChange={(e) => onInputChange(e)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="saldo" className="form-label">Saldo</label>
                <input type="number" step="any" className="form-control" id="saldo" name='saldo'
                    value={saldo} onChange={(e) => onInputChange(e)}/>
            </div>
            <div className='text-center'>
                <button type="submit" className="btn btn-warning btn-sn me-3">Salvar</button>
                <a href='/' className="btn btn-danger btn-sn me-3">Retornar</a>
            </div>
        </form>
    </div>
  )
}
