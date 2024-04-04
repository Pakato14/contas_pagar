import styles from './Conta.module.css'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Loading from '../layout/Loading';
import Container from '../layout/Container';

function Conta(){
    const { id } = useParams()
    const [account, setAccount] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)

    useEffect(() => {
        setTimeout(() =>{
            fetch(`http://localhost:5000/contas/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setAccount(data)
        })
        .catch((err) => console.log(err))
        }, 5000)
        
    }, [id])
    console.log(id)

    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }
    return (
        <>
        {account.name? (
            <div className={styles.account_details}>
                <Container customClass="column">
                <div className={styles.details_container}>
                    <h1>Conta: {account.name}</h1>
                    <button className={styles.btn} onClick={toggleProjectForm}>{!showProjectForm ? 'Editar conta' : 'Fechar'}</button>
                    {!showProjectForm ? (
                        <div className={styles.form}>
                            <p>
                            <span>Conta: </span> {account.name}
                            </p>
                            <p>
                            <span>Valor: </span> {account.valor}
                            </p>
                            <p>
                            <span>Vencimento: </span> {account.data_venc}
                            </p>
                            <p>
                            <span>Juros: </span> {account.juros}
                            </p>
                        </div>
                    ): (
                        <div className={styles.form}>
                            <p>detalhes do projeto</p>
                        </div>
                    )}
                </div>
            </Container>
            </div>
        ):(
            <Loading />
        )}
            </>        
    )
}

export default Conta