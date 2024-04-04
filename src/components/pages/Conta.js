import styles from './Conta.module.css'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Loading from '../layout/Loading';
import Container from '../layout/Container';
import AccountForm from '../account/AccountForm';
import Message from '../layout/Message';

function Conta(){
    const { id } = useParams()
    const [account, setAccount] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()

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

    function editPost(account){
        // if(compara a data de vencimento){
        //     setMessage(`O Boleto está com dias atrasado`)
        //     setType('error')
        //     return false
        // }
        fetch(`http://localhost:5000/contas/${account.id}`, {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(account)
        })
        .then((resp) => resp.json())
        .then((data) => {
            setAccount(data)
            setShowProjectForm(false)
            setMessage('Dados da conta atualizado!')
            setType('success')
        })
        .catch((err) => console.log(err))
    }

    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }
    return (
        <>
        {account.name? (
            <div className={styles.account_details}>
                <Container customClass="column">
                    {message && <Message type={type} msg={message} />}
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
                            <AccountForm handleSubmit={editPost} btnText="Concluir edição" contasData={account} />
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