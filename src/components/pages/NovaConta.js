import styles from './NovaConta.module.css'

import AccountForm from '../account/AccountForm'
function NovaConta(){
    return (
        <div className={styles.new_account_container}>
            <h1>Cadastrar Conta</h1>
            <p>Cadastre a conta para organizar a sua saúde financeira</p>
            <AccountForm />
        </div>
    )
}

export default NovaConta