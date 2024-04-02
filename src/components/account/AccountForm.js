import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import styles from './AccountForm.module.css'

function AccountForm({btnText}) {
  return (
    <form className={styles.form}>
      <Input type="text" text="Titulo" name="name" placeholder="Insira o titulo da conta"/>
      <Input type="number" text="Valor" name="valor" placeholder="Insira o valor da Conta"/>
      <Input type="date" text="Data de vencimento" name="data_venc" placeholder="Insira data de vencimento da Conta"/>
      <Input type="number" text="Taxa de juros" name="juros" placeholder="Insira a taxa de juros da Conta"/>    
      <SubmitButton text={btnText}   />
    </form>
  );
}
export default AccountForm;
