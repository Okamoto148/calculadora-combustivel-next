
import Button from '@mui/material/Button';
import styles from './Tipo.module.css';
import Image from 'next/image';


export default function Tipo({onClickViagem, onClickGasto, selectCalculadora, onClickEtanol}){

  return(
    <section className={styles.section}>
      <div className={styles.header}>
        Escolha o tipo de calculadora
      </div>
      <div className={styles.container}>
        <div className={styles.figura}><div className={styles.figura2}><Image
      src="/img/gasolina.webp"
        width={0}
  height={0}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  style={{ width: '70%', height: 'auto' }}
                                                                          
      alt="completa"
    /></div><Button className={styles.botao2} variant={selectCalculadora=="Etanol"?"contained":"outlined"} onClick={onClickEtanol}>Gasol x Etan</Button></div>
        <div className={styles.figura}><div className={styles.figura2}><Image
      src="/img/gasolina2.webp"
        width={0}
  height={0}
  sizes="(max-width: 768px) 60px, (max-width: 1200px) 50vw, 33vw"
  style={{ width: '100%', height: '100%', marginBottom: '30px' }}

      alt="completa"
    /></div><Button variant={selectCalculadora=="Gasto"?"contained":"outlined"} onClick={onClickGasto} className={styles.botao} >Km/Litro</Button></div>
        
        <div className={styles.figura}><div className={styles.figura2}> <Image
      src="/img/gasolina3.webp"
        width={0}
  height={0}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  style={{ width: '74%', height: 'auto' }}
      alt="completa"
    /></div><Button className={styles.botao}  variant={selectCalculadora=="Viagem"?"contained":"outlined"}  onClick={onClickViagem}>Consumo</Button></div>
      </div>
    </section>
  )
}