
import Button from '@mui/material/Button';
import styles from './Tipo.module.css';


export default function Tipo({onClickViagem, onClickGasto, selectCalculadora, onClickEtanol}){

  return(
    <section className={styles.section}>
      <div className={styles.header}>
        Escolha o tipo de calculadora
      </div>
      <div className={styles.container}>
        <div className={styles.figura}><div className={styles.figura2}><img src="./img/gasolina.webp" alt='adulto' width="70%"/></div><Button className={styles.botao2} variant={selectCalculadora=="Etanol"?"contained":"outlined"} onClick={onClickEtanol}>Gasol x Etan</Button></div>
        <div className={styles.figura}><div className={styles.figura2}><img src="./img/gasolina2.webp" className={styles.figura4} alt='gasto' width="70%"/></div><Button variant={selectCalculadora=="Gasto"?"contained":"outlined"} onClick={onClickGasto} className={styles.botao} >Km/Litro</Button></div>
        
        <div className={styles.figura}><div className={styles.figura2}><img src="./img/gasolina3.webp" alt='completa' width="73%"/></div><Button className={styles.botao}  variant={selectCalculadora=="Viagem"?"contained":"outlined"}  onClick={onClickViagem}>Consumo</Button></div>
      </div>
    </section>
  )
}