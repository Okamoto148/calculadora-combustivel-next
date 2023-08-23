import styles from './Blog.module.css'
import BannerBlog1 from './Components/Banners/BannerBlog1';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import HeaderSite from './Components/HeaderSite';

export default function BlogPost2(){

  return(
  <>
    <HeaderSite />
    <BannerBlog1 />

    <section style={{margin: '50px 10%', fontSize: '20px'}}>
        <h1 style={{fontSize: '35px'}}>Como calcular o consumo de combustível em km/l?</h1>
        <p>O cálculo do consumo de combustível em km/l é muito útil para fazer o planejamento de gasto de combustível, afinal não é possível ter total confiança dos números do rendimento passados pela fábrica, pois sempre há diferenças no modo de dirigir que dão divergências de resultados.</p>
        <p>Para que o cálculo seja mais preciso, é necessário ter em mente que o consumo entre etanol e gasolina são diferentes e que o gasto na estrada e na cidade também o são. Isso ocorre devido a inúmeros causas, como a maior quantidade de vezes que engatamos as marchas mais baixas, quantidade de frenagens entre outras.</p>
        <p>Neste post diremos como fazer o cálculo do consumo de combustível do seu carro e os modelos mais eficientes de carros nacionais. </p>
      </section>

    <section style={{margin: '50px 10%', fontSize: '20px'}}>
        <h2>Calculando o consumo de combustível em km/l</h2>
        <p>Para realizar este cálculo de maneira eficaz é necessário primeiro decidir se quer fazer a medição na estrada ou na cidade e qual combustível vai medir, se etanol ou gasolina que como dito tem divergências de valores. </p>
        <p>Após decidir, se o tanque tiver somente o combustível que se quer medir ir a um posto e completar, caso haja mistura é melhor esperar um momento mais oportuno. Ao completar o tanque zerar a quilometragem no painel ou anotar o valor.</p>
        <p>Depois ande alguns quilômetros na cidade ou na estrada, onde quiser saber o rendimento sendo o ideal andar mais do que 20 quilômetros.</p>
        
        <p>No final, complete o tanque novamente anotando quantos quilômetros andou e a quantidade de litros de combustível que gastou, Para realizar o cálculo use nossa <Link href='/#calculadora'>calculadora</Link> selecionando o botão km/l e colocando os valores anotados ou realize o cálculo manualmente pela equação abaixo.</p>

      <p>A equação para o cálculo é:</p>
      <div style={{border: '1px solid black', width: '100%', padding: '15px', display: 'flex'}}>
      <div style={{marginTop: '10px', marginRight: '10px'}}>Km/l= </div>
        <div className='equacao'>
        <div style={{textDecoration: 'underline'}}>Quilômetros rodados</div>
        <div className='equacao2'>Litros usados</div>
        </div>
      </div>
        
      <p>
        Interpretação: a interpretação vai depender muito da categoria do carro. Por exemplo, caso o rendimento seja da ordem de 15 km/l com gasolina para um carro popular é considerado um excelente resultado.
      </p>
      </section>

    <section style={{margin: '50px 10%', fontSize: '20px'}}>
        <h2>Quais são os 4 carros mais econômicos do Brasil?</h2>
        <p>O <Link href='https://www.uol.com.br/carros/listas/inmetro-divulga-os-carros-flex-com-menor-consumo-em-2022-confira-o-top-10.htm'>Inmetro</Link> divulgou recentemente (2022) a lista com os carros flex mais econômicos do país. Dentre eles estão</p>
        <p style={{color: 'gray', fontWeight: 'bold'}}>Renault Kwid Zen 1.0</p>
        <Typography display="flex" justifyContent="center" textAlign="center"  >
          <div style={{border: "1px solid lightgray", flexGrow: "1"}}> <div style={{backgroundColor: 'black', color: 'white', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><div>Gasolina</div></div>
            
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <div style={{borderBottom: '1px solid lightgray'}}>
            <div style={{height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> <div style={{flexGrow: '1'}}>Estrada</div><div style={{flexGrow: '1'}}>Cidade</div></div></div>
              </div>
              <div>
            <div style={{height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> <div style={{flexGrow: '1'}}>15,7 km/l</div><div style={{flexGrow: '1'}}>15,3 km/l</div></div></div>
              </div>
            
            
  <div style={{border: "1px solid lightgray", flexGrow: "1"}}> <div style={{backgroundColor: 'black', color: 'white', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><div>Etanol</div></div>
            
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <div style={{borderBottom: '1px solid lightgray'}}>
            <div style={{height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> <div style={{flexGrow: '1'}}>Estrada</div><div style={{flexGrow: '1'}}>Cidade</div></div></div>
              </div>
              <div>
            <div style={{height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> <div style={{flexGrow: '1'}}>11,0 km/l</div><div style={{flexGrow: '1'}}>10,8 km/l</div></div></div>
              </div>
          </Typography>

      <p style={{color: 'gray', fontWeight: 'bold', marginTop: '40px'}}>Hyundai HB20S Platinum</p>
        <Typography display="flex" justifyContent="center" textAlign="center"  >
          <div style={{border: "1px solid lightgray", flexGrow: "1"}}> <div style={{backgroundColor: 'black', color: 'white', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><div>Gasolina</div></div>
            
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <div style={{borderBottom: '1px solid lightgray'}}>
            <div style={{height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> <div style={{flexGrow: '1'}}>Estrada</div><div style={{flexGrow: '1'}}>Cidade</div></div></div>
              </div>
              <div>
            <div style={{height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> <div style={{flexGrow: '1'}}>16,9 km/l</div><div style={{flexGrow: '1'}}>14,3 km/l</div></div></div>
              </div>
            
            
  <div style={{border: "1px solid lightgray", flexGrow: "1"}}> <div style={{backgroundColor: 'black', color: 'white', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><div>Etanol</div></div>
            
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <div style={{borderBottom: '1px solid lightgray'}}>
            <div style={{height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> <div style={{flexGrow: '1'}}>Estrada</div><div style={{flexGrow: '1'}}>Cidade</div></div></div>
              </div>
              <div>
            <div style={{height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> <div style={{flexGrow: '1'}}>10,1 km/l</div><div style={{flexGrow: '1'}}>11,9 km/l</div></div></div>
              </div>
          </Typography>

              <p style={{color: 'gray', fontWeight: 'bold', marginTop: '40px'}}>Peugeot 208 Like</p>
        <Typography display="flex" justifyContent="center" textAlign="center"  >
          <div style={{border: "1px solid lightgray", flexGrow: "1"}}> <div style={{backgroundColor: 'black', color: 'white', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><div>Gasolina</div></div>
            
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <div style={{borderBottom: '1px solid lightgray'}}>
            <div style={{height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> <div style={{flexGrow: '1'}}>Estrada</div><div style={{flexGrow: '1'}}>Cidade</div></div></div>
              </div>
              <div>
            <div style={{height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> <div style={{flexGrow: '1'}}>16,3 km/l</div><div style={{flexGrow: '1'}}>14,7 km/l</div></div></div>
              </div>
            
            
  <div style={{border: "1px solid lightgray", flexGrow: "1"}}> <div style={{backgroundColor: 'black', color: 'white', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><div>Etanol</div></div>
            
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <div style={{borderBottom: '1px solid lightgray'}}>
            <div style={{height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> <div style={{flexGrow: '1'}}>Estrada</div><div style={{flexGrow: '1'}}>Cidade</div></div></div>
              </div>
              <div>
            <div style={{height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> <div style={{flexGrow: '1'}}>10,4 km/l</div><div style={{flexGrow: '1'}}>11,3 km/l</div></div></div>
              </div>
          </Typography>

      <p style={{color: 'gray', fontWeight: 'bold', marginTop: '40px'}}>Chevrolet Onix Plus LT</p>
        <Typography display="flex" justifyContent="center" textAlign="center"  >
          <div style={{border: "1px solid lightgray", flexGrow: "1"}}> <div style={{backgroundColor: 'black', color: 'white', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><div>Gasolina</div></div>
            
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <div style={{borderBottom: '1px solid lightgray'}}>
            <div style={{height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> <div style={{flexGrow: '1'}}>Estrada</div><div style={{flexGrow: '1'}}>Cidade</div></div></div>
              </div>
              <div>
            <div style={{height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> <div style={{flexGrow: '1'}}>17,6 km/l</div><div style={{flexGrow: '1'}}>13,8 km/l</div></div></div>
              </div>
            
            
  <div style={{border: "1px solid lightgray", flexGrow: "1"}}> <div style={{backgroundColor: 'black', color: 'white', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><div>Etanol</div></div>
            
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <div style={{borderBottom: '1px solid lightgray'}}>
            <div style={{height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> <div style={{flexGrow: '1'}}>Estrada</div><div style={{flexGrow: '1'}}>Cidade</div></div></div>
              </div>
              <div>
            <div style={{height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> <div style={{flexGrow: '1'}}>9,6 km/l</div><div style={{flexGrow: '1'}}>12,5 km/l</div></div></div>
              </div>
          </Typography>
      <p>O cálculo do rendimento do carro é uma ótima forma para se fazer o planejamento de gastos de combustível. Seu cálculo é feito de forma fácil e basta somente seguir as instruções descritas e dividir a distância percorrida em quilômetros e o consumo em litros do combustível.</p>
      <p>Para facilitar o cálculo use nossa <Link href='/#calculadora'>calculadora</Link>. Lá também é possível descobrir qual combustível é mais vantajoso e o gasto em combustível de uma viagem.</p>
      </section>

   
  </>
    
  )
}