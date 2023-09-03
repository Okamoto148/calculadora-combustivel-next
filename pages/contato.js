import HeaderSite from './Components/HeaderSite';
import styles from './Contato.module.css';

export default function Contato(){
  return (
    <>
      <HeaderSite />
      <div className={styles.header}>
        Caso tenha alguma sugestão entre em contato!
      </div>
    <div style={{border:'0',overflow:'visible', margin: '5%'}}>
<object type="text/html" style={{width:'100%',height: '1100px'}} data="https://formulario-contato-calculadora.lecookamoto.repl.co/"></object>
</div>
    </>
  )
}