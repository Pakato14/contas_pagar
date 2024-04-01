import styles from './Home.module.css'
import savings from '../../img/savings.svg'

import LinkButton from '../layout/LinkButton'

function Home(){
    return (
        <section className={styles.home_container}>
            <h1>Bem vindo ao <span>Contas a pagar</span></h1>
            <p>Comece a gerenciar suas contas agora mesmo!</p>
            <LinkButton to="/novaconta" text="Cadastrar Conta" />
            <img src={savings} alt="Custos"/>
        </section>
    )
}

export default Home