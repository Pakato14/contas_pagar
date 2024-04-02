import { useLocation } from "react-router-dom";

import Message from "../layout/Message";
import styles from "./Contas.module.css";
import Container from '../layout/Container';
import LinkButton from "../layout/LinkButton";

//isso é uma página project do tutorial
function Contas() {
  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }
  return (
    <div className={styles.account_details}>
      <div className={styles.details_container}>
        <h1>Minhas Contas</h1>
        <LinkButton to="/novaconta" text="Cadastrar Conta" />
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="start">
        <p>Contas...</p>
      </Container>
    </div>
  );
}

export default Contas;
