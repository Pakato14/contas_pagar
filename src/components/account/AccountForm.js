import { useState } from 'react';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import styles from './AccountForm.module.css'

function AccountForm({handleSubmit, btnText, contasData}) {
    const [conta, setConta] = useState(contasData || {})

    const submit = (e) => {
        e.preventDefault()
        // console.log('conta', conta)
        handleSubmit(conta)
    }

    function handleChange(e){
        setConta({ ...conta, [e.target.name]: e.target.value})
        //console.log('conta', conta)
    }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input type="text" text="Titulo" name="name" placeholder="Insira o titulo da conta" handleOnChange={handleChange} value={conta.name ? conta.name : ''}/>
      <Input type="number" text="Valor" name="valor" placeholder="Insira o valor da Conta" handleOnChange={handleChange} value={conta.valor ? conta.valor : ''}/>
      <Input type="date" text="Data de vencimento" name="data_venc" placeholder="Insira data de vencimento da Conta" handleOnChange={handleChange} value={conta.data_venc ? conta.data_venc : ''}/>
      <Input type="number" text="Taxa de juros" name="juros" placeholder="Insira a taxa de juros da Conta" handleOnChange={handleChange} value={conta.juros ? conta.juros : ''}/>
      
      <SubmitButton text={btnText}   />
    </form>
  );
}
export default AccountForm;
