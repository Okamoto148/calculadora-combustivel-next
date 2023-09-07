import styles from './Blog.module.css';
import Banner2 from './Components/Banners/Banner2';
import HeaderSite from './Components/HeaderSite';
import {useState} from 'react';
import Link from 'next/link';
import Footer from './Components/Footer';

export default function Blog(){
  const [mobileOpen,setMobileOpen]=useState(false);
    
  
  return (
  <>
    <HeaderSite handleDrawerToggle={e=>{setMobileOpen(true)}} mobileOpen={mobileOpen}/>
   <Banner2 />
    <section className={styles.blog}>
      
      <div className={styles.blog2}>
        <div style={{height: '210px'}}><Link href='/como_calcular_qual_combustivel_compensa'><img src='./img/carro1.jpg' style={{height: '100%', width: '100%'}} alt=''/></Link></div>
        <div style={{fontSize: '25px', padding: '20px 0'}}><Link href='/como_calcular_qual_combustivel_compensa' className={styles.link}>Como calcular qual combustível compensa?</Link></div>
      </div>
      
      <div className={styles.blog2}>
        <div style={{height: '210px'}}><Link href='/como_calcular_o_consumo_de_combustivel'><img src='./img/painel.jpg' style={{height: '100%', width: '100%'}} alt=''/></Link></div>
        <div style={{fontSize: '25px', padding: '20px 0'}}><Link href='/como_calcular_o_consumo_de_combustivel' className='link'>Como calcular o consumo de combustível em km/l?</Link></div>
      </div>
      
       <div className={styles.blog2}>
        <div style={{height: '210px'}}><Link href='/seis_dicas_para_economizar_gasolina'><img src='./img/bomba.webp' style={{height: '100%', width: '100%'}} alt=''/></Link></div>
        <div style={{fontSize: '25px', padding: '20px 0'}}><Link href='/seis_dicas_para_economizar_gasolina' className={styles.link}>Seis dicas para economizar gasolina</Link></div>
      </div>
    </section>
    <Footer/>
    



   
  </>
    )
  
}