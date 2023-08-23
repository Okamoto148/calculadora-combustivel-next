import styles from './Banner.module.css'

export default function BannerSobre(){
  return (
         <section style={{background: 'rgba(0, 0, 0, 0.6) url(./img/carro2.jpg)',height: '500px', width: '105%',
    margin: '-10px', color: 'white',fontSize: '25px', backgroundBlendMode: 'darken', backgroundAttachment: 'fixed', display: 'flex', alignItems: 'center'}}>
            <div className={styles.blogsobre}><div style={{margin: '20px', fontWeight: 'bold'}}>Tudo sobre economia de combustíveis</div></div>

      </section>
  )
}