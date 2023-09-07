import styles from './Blog.module.css'
import BannerBlog1 from './Components/Banners/BannerBlog1';
import  Link  from "next/link";
import Typography from '@mui/material/Typography';
import HeaderSite from './Components/HeaderSite';
import Footer from './Components/Footer';

export default function BlogPost3(){

  return(
  <>
    <HeaderSite />
    <BannerBlog1 />

    <section style={{margin: '50px 10%', fontSize: '20px'}}>
        <h1 style={{fontSize: '35px'}}>Seis dicas para economizar gasolina</h1>
        <p>A gasolina está cada vez mais cara por isso procurar alternativas para economizar no combustível é sempre bem vindo. Pequenas mundaças de atitudes atrás do volante podem ajudar.</p>
        <p>Por isso separamos dez dicas para diminuir economizar na gasolina e diminuir os gastos.</p>
      </section>

    <section style={{margin: '50px 10%', fontSize: '20px'}}>
        <h2>1) Evite trânsito</h2>
        <p>Andar com trânsito aumenta a quantidade de acelerações e frenagens que não seriam necessárias em horários sem trânsitos. Se possível tente sair antes ou depois do horário de pico. </p>
      </section>

    <section style={{margin: '50px 10%', fontSize: '20px'}}>
        <h2>2) Mantenha o motor com a rotação adequada</h2>
        <p>Manter rotações altas e bruscas aumentam não somente o gasto com o combustível, mas também os gastos com a <Link href='https://blog.sempararempresas.com.br/economizar-combustivel/' target='_blank'>embreagem</Link>. Faça uma direção mais regular e suave e isso ajudará a diminuir o consumo de gasolina.</p>
        
      </section>
   
    <section style={{margin: '50px 10%', fontSize: '20px'}}>
        <h2>3) Calibre os pneus</h2>
        <p>Um pneu <Link href='https://www.uol.com.br/carros/noticias/redacao/2022/03/22/dicas-para-economizar-combustivel-o-que-e-verdade-e-o-que-e-mito.htm'> murcho</Link> aumenta o atrito, dificultando para o carro andar consequentemente aumentando os gastos com o combustível. Por isso é importante deixar os pneus sempre bem calibrados. É importante lembrar que encher muito o pneu ajuda ao carro ficar mais leve, no entanto o carro perde a estabilidade e pode perder até o próprio pneu.</p>
        
      </section>
    

      <section style={{margin: '50px 10%', fontSize: '20px'}}>
        <h2>4) Realizar manutenção preventiva</h2>
        <p>A manutenção preventiva ajuda ao carro ter problemas e que não consuma mais combustível. Certos problemas simples de resolver como um filtro de ar muito sujo ou um óleo envelhecido promovem um maior gasto de gasolina.</p>
        
      </section>
    
      <section style={{margin: '50px 10%', fontSize: '20px'}}>
        <h2>5) Evite pesos desnecessários</h2>
        <p>É importante ter em mente que quanto maior o peso, mais energia é necessária para conduzir o carro no mesmo trajeto, portante é interessante verificar se não há pesos desnecessários no carro.</p>
        
      </section>
    
      <section style={{margin: '50px 10%', fontSize: '20px'}}>
        <h2>6) Evite andar com ar condicionado ligado</h2>
        <p>Quando se está num dia quente é quase impossível não ligar o ar condicionado, mas se possível deixe-o desligado, pois ele aumenta o consumo de combustível.</p>
        <p>Com a alta nos preços o gasto com a gasolina está consumindo cada vez mais do orçamento familiar, no entanto é possível diminuir os gastos com pequenas atitudes como evitar trânsitos, calibrar pneus, fazer a manutenção preventiva dentre outras.</p>
        <p>Quer saber uma forma de calcular seus gastos com combustível? Use nossa <Link href='/'>calculadora</Link></p>
        
      </section>
    <Footer/>

   
  </>
    
  )
}