import styles from './AccountCard.module.css'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function AccountCard({id, name, valor, data_venc, juros, handleRemove}){

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
      }

      return (
        <div className={styles.account_card}>
          <h4>{name}</h4>
          <p>
            <span>Valor:</span> R$ {valor}
          </p>
          <p>
            <span>Juros:</span> R$ {juros}
          </p>
          <p className={styles.category_text}>
            <span className={`${styles[data_venc?.toLowerCase() ||'']}`}></span> {data_venc}
          </p>
          <div className={styles.account_card_actions}>
            <Link to={`/conta/ ${id}`}>
              <BsPencil /> Editar
            </Link>
            <button onClick={remove}>
              <BsFillTrashFill />
              Excluir
            </button>
          </div>
        </div>
      )
}

export default AccountCard