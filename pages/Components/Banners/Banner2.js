import styles from './Banner.module.css';

export default function Banner2(){
  return (
        <section style={{background: 'rgba(0, 0, 0, 0.6) url(./img/carro.jpg)',height: '500px', width: '105%',
    margin: '-10px', color: 'white',fontSize: '25px', backgroundBlendMode: 'darken', backgroundAttachment: 'fixed'}}>
             <div style={{paddingTop: "140px", width: '90%', margin: 'auto'}}>
                  <h1>Artigos sobre economia de combustíveis</h1>
                  <div style={{fontWeight: "bold"}}>
                   
                    <p >Posts sobre economia de combustíveis, etanol, gasolina, GNV <span className={styles.desktop}>, custos dos combustíveis, como calcular rendimento do carro, maneiras de economizar nos postos e muito mais.</span> </p>
                    
                  </div>
                </div>
            
         
                



      </section>
  )
}