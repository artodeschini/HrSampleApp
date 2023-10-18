import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';

export default function ListaEmpregado() {

    const urlBase = "http://localhost:8080/rh-app/empregados";

    const [empregados, setEmpregados] = useState([]);

    useEffect(() => {
        carregarEmpregados();
    }, []);

    const carregarEmpregados = async () => {
        const result = await axios.get(urlBase);
        console.log(result.data);
        setEmpregados(result.data);
    }

  return (
    <div className='container'>
        <div className="container text-center" style={{margin: "30px"}}>
            <h3>Sistema de Recursos Humanos</h3>
        </div>
        <table className="table table-striped table-hover align-middle">
            <thead className='table-dark'>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Departamento</th>
                <th scope="col">Saldo</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {
                // iteracao de array de empregados
                empregados.map((e, indice) => (
                <tr key={indice}>
                    <th scope="row">{e.id}</th>
                    <td>{e.nome}</td>
                    <td>{e.departamento}</td>
                    <td>
                        <NumericFormat value={e.saldo}
                            displayType={'text'}
                            thousandSeparator={","}
                            prefix={'R$ '}
                            decimalScale={2}
                            fixedDecimalScale>
                        </NumericFormat>
                    </td>
                    <td className='text-center'>
                        <div>
                            <Link to={`/editar/${e.id}`} 
                                className='btn btn-warning btn-sm me-3'>Editar</Link>
                                
                        </div>
                    </td>
                </tr>
                ))
                }
            </tbody>
        </table>
    </div>
  )
}
