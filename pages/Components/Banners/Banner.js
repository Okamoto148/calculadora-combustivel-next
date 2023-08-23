import styles from './Banner.module.css';

export default function Banner(){
  return (
        <section style={{background: 'rgba(0, 0, 0, 0.6) url(./img/ponteiro.webp)',height: '500px', width: '105%', marginLeft: '-10px',
    color: 'white',fontSize: '25px', backgroundBlendMode: 'darken', backgroundAttachment: 'fixed'}}>
                <div style={{paddingTop: "100px", width: '80%', margin: 'auto'}}>
                  <h1>Calculadora combustível</h1>
                  <div style={{fontWeight: "bold"}}>
                    <p>O site para quem quer economizar no combustível. <span className={styles.desktop}>Com esta calculadora você pode descobrir formas de economizar no combustível, o rendimento do seu carro entre outras funcionalidades.</span></p>
                    <p><button className={styles.botao} >Calcule Abaixo</button></p>
                  </div>
                </div>



      </section>
  )
}