import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

import Message from "../layout/Message";
import styles from "./Contas.module.css";
import Container from '../layout/Container';
import LinkButton from "../layout/LinkButton";
import Loading from "../layout/Loading";
import AccountCard from "../account/AccountCard"

//isso é uma página project do tutorial
function Contas() {
    const [contas, setContas] = useState([])
    const [removeLoading, setRemoveLoading]  = useState(false)
  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    fetch('http://localhost:5000/contas',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(resp => resp.json())
    .then((data) => {
      console.log('data', data)
      setContas(data)
      setRemoveLoading(true)
    })
    .catch((err) => console.log(err))
  }, [])

  function removeConta(id){
    
  }
  return (
    <div className={styles.account_details}>
      <div className={styles.details_container}>
        <h1>Minhas Contas</h1>
        <LinkButton to="/novaconta" text="Cadastrar Conta" />
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="start">
        {contas.length > 0 && contas.map((conta) =>(
          <AccountCard 
            id={conta.id}
            name={conta.name}
            valor={conta.valor}
            data_venc={conta.data_venc}
            juros={conta.juros} 
            key={conta.id}
            />
        ))}
        {!removeLoading && <Loading />}   
        {removeLoading && contas.length === 0 &&(
          <p>Não há projetos cadastrados!</p>
        )}     
      </Container>
    </div>
  );
}

export default Contas;
