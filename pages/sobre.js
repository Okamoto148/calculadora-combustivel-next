import HeaderSite from './Components/HeaderSite';
import Link from 'next/link';
import BannerSobre from './Components/Banners/BannerSobre';
import {useState} from 'react';
import styles from './Sobre.module.css';
import Footer from './Components/Footer';

const Sobre = () => {
//data
  const [mobileOpen,setMobileOpen]=useState(false);
  
    return (

      <>
        <HeaderSite handleDrawerToggle={e=>{setMobileOpen(true)}} mobileOpen={mobileOpen}/>
        <BannerSobre />
        <div style={{margin: '60px'}}>
            <h2 style={{fontSize: '35px'}}>Sobre</h2>
          <div className={styles.sobre}>
          <div className={styles.sobre2}>
          <p style={{color: 'gray'}}><div style={{fontWeight: 'bold', color: 'black'}}>Missão</div>Este site tem a missão de informar e facilitar cálculos para economia de combustíveis em geral sempre coletando informações de fontes confiáveis.</p>
            
            <p style={{color: 'gray'}}><div style={{fontWeight: 'bold', color: 'black'}}>Visão</div>Temos o intuito de nos transformarmos em referência de informações sobre combustíveis e cálculos para diminuição gastos.</p>
          </div>

            <div className={styles.sobre2}>
          <p style={{color: 'gray'}}><div style={{fontWeight: 'bold', color: 'black'}}>Valores</div>Os valores que nortearão este blog são a transparência, honestidade e o compartilhamento de conhecimento confiável.</p>

          </div>
            
            </div>
        </div>
        <Footer />

        </>
    );
}

export default Sobre;