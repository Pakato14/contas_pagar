import { useNavigate } from 'react-router-dom'

import styles from './NovaConta.module.css'

import AccountForm from '../account/AccountForm'
function NovaConta(){

    const navigate = useNavigate()

    function createPost(conta){


        fetch("http://localhost:5000/contas",{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(conta)
        })
        .then(resp => resp.json())
        .then((data) => {
            console.log(data)
            //redirect
            //history.push('/contas', { message: 'Conta cadstrada com sucesso'})
            navigate("/contas", { message: "PConta cadstrada com sucesso!" })
        })
        .catch(err => console.log(err))

    }
    return (
        <div className={styles.new_account_container}>
            <h1>Cadastrar Conta</h1>
            <p>Cadastre a conta para organizar a sua saúde financeira</p>
            <AccountForm handleSubmit={createPost} btnText="Cadastrar Conta"/>
        </div>
    )
}

export default NovaConta