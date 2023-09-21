import Header from './Components/Header';
import Typography from '@mui/material/Typography';
import Tipo from './Components/Tipo';
import {useState,useEffect} from 'react';
import InputText from './Components/InputText';
import DialogNovo from './Components/DialogNovo';
import Button from '@mui/material/Button';
import Dialog from './Components/Dialog';
import Banner2 from './Components/Banners/Banner2';
import {Helmet} from "react-helmet";
import HeaderSite from './Components/HeaderSite';
import styles from '../styles/Home.module.css';
import Script from 'next/script';
import Footer from './Components/Footer';
import BannerBlog1 from './Components/Banners/BannerBlog1';

const Home = () =>{
  //data
  const [selectCalculadora, setSelectCalculadora] = useState("Etanol");
    const [altura, setAltura]=useState('');
    const [peso, setPeso]=useState('');
  const [open,setOpen] = useState(false);
  const [abrir, setAbrir] = useState(false);
  const [content, setContent] = useState("");
  const [content2, setContent2] = useState("");
  const [content3, setContent3] = useState("");
  const [content4, setContent4] = useState("");
  const [content5, setContent5] = useState("");
  const [gasolina, setGasolina] = useState("");
  const [viagem, setViagem]=useState(true);
  const [etanol, setEtanol] = useState("");
  const [pesoIdeal,setPesoIdeal]=useState("");
  const [listaPeso, setListaPeso]=useState([]);
  const placeholderAltura= "Preço do etanol. Ex: R$ 4,50";
  const placeholderPeso = "Preço da gasolina. Ex: R$ 6,70";
  const resultado=!altura||!peso?"Aviso":"Resultado";
  const [valores, setValores]=useState("");
  const [valores2, setValores2]=useState("");
  const [valores3, setValores3]=useState("");
  const [km, setKm]=useState("");
  const [litro, setLitro]=useState("");
  const [preco, setPreco]=useState("");
  const descricaoGasto = 'Para usar esta calculadora basta colocar a quantidade de quilomêtros percorridos e os litros gastos. Para isso quando completar o tanque zere a quilometragem no painel. Ande por algum tempo e complete o tanque novamente. Coloque na calculadora os valores de quilomêtros na hora do segundo abastecimento e a quantidade de combustível abastecido na segunda vez.';
  const descricaoEtanol = 'Para usar esta calculadora basta colocar o valor do etanol e da gasolina nos respectivos lugares. O resultado dará a melhor opção.';
  const descricaoViagem = viagem?'Para saber o custo total de combustível de uma viagem, basta colocar os valores da distância a ser percorrida, o rendimento do carro na estrada em km/l e o valor do combustível em questão.':'Para saber qual a distância que pode ser percorrida com um valor fixo basta colocar o valor, o rendimento do carro em km/l na estrada, se for uma viagem ou na cidade, se for andar na cidade e o valor do combustível em questão.';
  const [mobileOpen, setMobileOpen]=useState(false);
  



  function substituir(e){
    return e.replace(".",",");
  };
  
  function calcular(e){
    e.preventDefault();
    setOpen(true);

    
    if(selectCalculadora=="Etanol"){

        if(!etanol||!gasolina){
      setContent("Favor colocar todos os dados!")
        }else{
      
      const resultado = (etanol/gasolina).toFixed(2);

      setValores(substituir(resultado));
      if(resultado<=0.73){
        setContent(`O resultado deu ${substituir(resultado)} que é abaixo de 0,73, portanto é melhor abastecer com etanol`);
        setValores2('Etanol');
      }else if(resultado==0.73){
        setContent('O resultado deu igual a 0.73, portanto é indiferente se abastecer com etanol ou gasolina');
        setValores2('Indiferente');
      }else{
        setContent(`O resultado deu ${substituir(resultado)} que é acima de 0,73, portanto é melhor abastecer com gasolina`);
        setValores2('Gasolina');
      }
      
    }
    }

        if(selectCalculadora=="Gasto"){

             if(!km||!litro){
      setContent("Favor colocar todos os dados!")
          }
          
          const resultado = substituir((km/litro).toFixed(2));
          setValores(`${resultado} km/l`);
          setValores2('');
          setContent(`O resultado é ${resultado} km/l`)
        
    }

      
    if(selectCalculadora=="Viagem"){
       if(!km||!litro||!preco){
      setContent("Favor colocar todos os dados!")
          }else{

          if(viagem){
       const combustivel = (km/litro);
        const combustivel2=substituir(combustivel.toFixed(2));
        const valor= substituir((preco*(combustivel)).toFixed(2));


        setValores(`${combustivel2} litros`);
        setValores2(`R$ ${valor}`);
        setValores3(`R$ ${substituir((preco/litro).toFixed(2))}/km`);
        setContent(`A quantidade de combustível para abastecer é de ${combustivel2} litros e o valor final gasto é de R$ ${valor}`)
    }else{
          const combustivel = (km/preco);
        const combustivel2=substituir(combustivel.toFixed(2));
        const valor= substituir((litro*(combustivel)).toFixed(2));


        setValores(`R$ ${km}`);
        setValores2(`${valor} km`);
        setValores3(`R$ ${substituir((preco/litro).toFixed(2))}/km`);
        setContent(`A distância percorrida com o valor de R$ ${km} é de ${valor} km`)  
    }
      
  }
      }
  };


  useEffect(()=>{
    if(!open){
    setEtanol("");
    setGasolina("");
    setKm("");
    setLitro("");
      setPreco("");
      };

  },[open])

  
  return (
    <>

      <Helmet>
  <title>Calculadora de Combustível</title>
         <meta property='og:title' content='Calculadora de Combustível' />
        <meta name="description" content="Calcule aqui qual combustível é o mais vantajoso (etanol ou gasolina), o rendimento do carro em km/l ou o custo do combustível para uma viagem." />
        <link rel="icon" href="./img/combustivel.png" />
    </Helmet>

         <Script src="https://www.googletagmanager.com/gtag/js?id=G-9JHMFW3LC9" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-9JHMFW3LC9');
        `}
      </Script>

      <Script
   id="Adsense-id"
   data-ad-client="ca-pub-1069552857765335"
   async
   strategy="beforeInteractive"
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
/>
    <main className={styles.main}>
       <HeaderSite handleDrawerToggle={e=>{setMobileOpen(true)}} mobileOpen={mobileOpen}/>
      
      <Tipo onClickViagem={()=>setSelectCalculadora("Viagem")} onClickEtanol={()=>setSelectCalculadora("Etanol")} onClickGasto={()=>setSelectCalculadora("Gasto")} selectCalculadora={selectCalculadora}/>
     {selectCalculadora==='Etanol'&& <form onSubmit={calcular}>
      <InputText valueAltura={etanol} valuePeso={gasolina} onChangeAltura={e=>setEtanol(e)} onChangePeso={e=>setGasolina(e)} placeholderAltura={placeholderAltura} placeholderPeso={placeholderPeso} selectCalculadora={selectCalculadora}/>
       
        <DialogNovo open={open} titulo={!etanol||!gasolina?'Aviso':'Resultado'} handleClose={()=>setOpen(false)} fechar="Fechar" content={content} content2={content2} content3={content3} content4={content4} content5={content5} peso={peso} pesoIdeal={pesoIdeal} selectCalculadora={selectCalculadora} altura={altura} resultado={valores} resultado2={valores2} />
      
      
      <div style={{display: 'flex'}}>
        <Button sx={{ml: '3%', mb:6, mr: 2}} variant='contained'  type="submit">Calcular</Button>
         <Dialog open={abrir} handleClickOpen={e=>setAbrir(true)}  handleClose={e=>setAbrir(false)} descricao={descricaoEtanol}/>
      </div>
        </form>}


      {selectCalculadora==='Gasto'&& <form onSubmit={calcular}>
      <InputText valueAltura={km} valuePeso={litro} onChangeAltura={e=>setKm(e)} onChangePeso={e=>setLitro(e)} placeholderAltura='Quilômetros rodados. Ex.: 500' placeholderPeso='Litros Gastos. Ex.: 30' selectCalculadora={selectCalculadora} label='Quilômetro' label2='Litro'/>
       
        <DialogNovo open={open} titulo={!km||!litro?'Aviso':'Resultado'} handleClose={()=>setOpen(false)} fechar="Fechar" content={content} content2={content2} content3={content3} content4={content4} content5={content5} peso={peso} pesoIdeal={pesoIdeal} selectCalculadora={selectCalculadora} altura={altura} resultado={valores} resultado2={valores2} />
      
      <div style={{display: 'flex'}}>
        <Button sx={{ml: '3%', mb:6, mr: 2}} variant='contained'  type="submit">Calcular</Button>
        <Dialog open={abrir} handleClickOpen={e=>setAbrir(true)}  handleClose={e=>setAbrir(false)} descricao={descricaoGasto}/>
      </div>
        </form>}

      {selectCalculadora==='Viagem'&& <form onSubmit={calcular}>
      <InputText valueAltura={km} onClickSwitch={e=>setViagem(!viagem)} valuePeso={litro} onChangeAltura={e=>setKm(e)} onChangePeso={e=>setLitro(e)} onChangePreco={e=>setPreco(e)} placeholderAltura={viagem?'Distância a ser percorrida. Ex.: 600':'Valor que será gasto. Ex.: 300'} placeholderPeso='Distância em quilômetro para cada litro. Ex.: 14' selectCalculadora={selectCalculadora} label={viagem?'Distância':'Valor'} viagem={viagem} label2='Quilômetro por litro' valuePreco={preco}/>
       
        <DialogNovo open={open} titulo={!km||!litro?'Aviso':'Resultado'} handleClose={()=>setOpen(false)} fechar="Fechar" content={content} content2={content2} content3={content3} content4={content4} content5={content5} peso={peso} pesoIdeal={pesoIdeal} selectCalculadora={selectCalculadora} altura={altura} resultado={valores} resultado2={valores2} viagem={viagem} resultado3={valores3}/>
      
      <div style={{display: 'flex'}}>
        <Button sx={{ml: '3%', mb:6, mr: 2}} variant='contained'  type="submit">Calcular</Button>
        <Dialog open={abrir} handleClickOpen={e=>setAbrir(true)}  handleClose={e=>setAbrir(false)} descricao={descricaoViagem}/>
      </div>
        </form>}

      <a id="artigos" />
      <div className={styles.freepik}><a href="https://br.freepik.com/vetores-gratis/conceito-de-nutricionista-terapia-nutricional-com-alimentacao-saudavel-e-atividade-fisica-programa-de-perda-de-peso-e-conceito-de-dieta-ilustracao-vetorial-em-estilo-cartoon_26432857.htm#query=perda%20de%20peso&position=16&from_view=search">Image by vector4stock</a> on <a href="https://br.freepik.com/">Freepik</a></div>

     

      <div style={{fontSize: '30px', margin: '50px 10%', fontWeight: 'bolder'}}>Artigos</div>
      <section className={styles.indice}>
        <div style={{textAlign: 'center', fontWeight: 'bold', fontSize: '25px', color: '#4f4f4f', margin: '15px 0', }}>Índice</div>
        <div className={styles.link}><a className={styles.link2} href='#explicacaoetanol'>1 Calculadora de combustível gasolina x etanol (explicação)</a></div>
        <div className={styles.link}><a className={styles.link2} href='#explicacaorendimento'>2 Calculadora de combustível por km para cada litro (explicação)</a></div>
        <div className={styles.link}><a className={styles.link2} href='#explicacaodicas'>3 Calculadora de consumo de combustível (explicação)</a></div>
        <div className={styles.link}><a className={styles.link2} href='#etanol'>4 Como calcular qual combustível compensa na hora de abastecer?</a></div>
        <a id='explicacaoetanol' />
        <div className={styles.link}><a className={styles.link2} href='#rendimento'>5 Como calcular o consumo de combustível em km/l?</a></div>
        <div className={styles.link}><a className={styles.link2} href='#dicas'>6 Seis dicas para economizar gasolina</a></div>
        
      </section>

      
      <section style={{margin: '50px 10%', fontSize: '20px'}}>
        <h1>Calculadora de combustível gasolina x etanol (explicação)</h1>
        <p>Esta calculadora é muito útil para saber qual combustível compensa mais, trazendo economia. Para usá-la é muito simples. Basta colocar o valor na bomba da gasolina e do etanol, clicar em calcular e a calculadora dará a melhor opção de abastecimento.</p>
        <p>A gasolina tem a vantagem de render mais, por isso muitas vezes, mesmo o preço sendo maior vale mais abastecer com gasolina. Por outro lado o etanol, além de ser mais barato ele aumenta um pouco a potência do motor. </p>
        <a id='explicacaorendimento' />
        <p>A calculadora foi feita baseada em estudos mais recentes realizados pelo <a href='https://autopapo.uol.com.br/noticia/porcentagem-gasolina-ou-etanol/' target='_blank'>Instituto Mauá de Tecnologia</a>  que foi levado em consideração a mistura da gasolina com o etanol atual de 27% e a proporção máxima recomendada é de 73%. A antiga conta de 70%, ou 0,7, levava em consideração a mistura da gasolina que era de 22%.  </p>
      </section>

       <section style={{margin: '50px 10%', fontSize: '20px'}}>
        <h2>Calculadora de combustível por km para cada litro (explicação)</h2>
        <p>Esta calculadora facilita na hora de descobrir o rendimento do carro em km/l. Para empregar a calculadora primeiro faça os seguintes passos:</p>
         <ul>
          <li>Complete o tanque com o combustível que quer descobrir o rendimento, se tiver misturado o cálculo não dará certo.</li>
           <li>No momento que completar zere a quilometragem no painel ou anote quantos quilômetros está marcando, antes de começar a andar.</li>
           <li>Ande alguns quilômetros na estrada ou cidade, onde você quiser testar o rendimento, sendo o ideal andar mais do que 20 quilômetros.</li>
           <a id='explicacaodicas' />
           <li>Depois complete o tanque novamente anotando quantos quilômetros andou e quantos litros está abastecendo e coloque na calculadora e você descobrirá o rendimento, na estrada, se andou na estrada ou na cidade, se andou na cidade.</li>
         </ul>

         <p>Com os valores anotados clique no botão km/l da calculadora e colocar os valores anotados e clicar em calcular.</p>
      </section>

      <section style={{margin: '50px 10%', fontSize: '20px'}}>
        <h2>Calculadora de consumo de combustível (explicação)</h2>
        <p>Esta calculadora serve para dois momentos, quando quer descobrir quanto se gasta numa viagem com combustível ou quando se quer descobrir quantos quilômetros é possível andar com um valor fixo, por exemplo R$ 300,00. A explicação do uso das duas calculadoras estão abaixo.</p>

        <h3 style={{color: 'darkgray', marginBottom: '-10px'}}>Calculadora de consumo de combustível (também para viagens)</h3>
        <p>Para descobrir o custo do consumo de combustível  basta selecionar a calculadora Consumo e depois colocar os dados solicitados nas áreas em questão e clicar em calcular.</p>
        <h3 style={{color: 'darkgray', marginBottom: '-10px'}}>Calculadora distância com custo fixo</h3>
        <p>Para descobrir a distância percorrida com um valor fixo, selecione a calculadora viagem depois clique no botão 'interruptor' abaixo do botão da gasolina x etanol. Depois coloque os valores nos locais indicados e apertar em calcular.</p>
       
      </section>
<a id='etanol'></a>
      
      <BannerBlog1 />
      <section style={{margin: '50px 10%', fontSize: '20px'}}>
        <h2 style={{fontSize: '35px'}}>Como calcular qual combustível compensa na hora de abastecer?</h2>
        <p>A escolha do melhor combustível sempre foi uma preocupação para todos os motoristas desde que surgiu o carro flex. Afinal quando é melhor abastecer com etanol e quando a gasolina é mais vantajosa? </p>
        <p>Ambos os combustíveis tem suas vantagens e desvantagens. Por isso é interessante não levar somente o bolso na hora da escolha. </p>
        <p>Quer saber mais sobre este assunto. Continue a leitura deste post. </p>
      </section>

    <section style={{margin: '50px 10%', fontSize: '20px'}}>
        <h2>Calculo para verificar qual combustível compensa mais na hora de abastecer</h2>
        <p>Para descobrir qual combustível compensa mais na hora do abastecimento basta fazer um cálculo simples. O primeiro passo anote o valor do etanol e da gasolina. </p>
        <p>Faça a divisão do valor do etanol e divida pelo valor da gasolina. Segundo os testes feitos pelo Inmetro e levando em consideração cálculos mais conservadores, se esse valor der abaixo de 0,7 compensa mais o etanol, caso contrário a gasolina. </p>
        <p>No entanto o cálculo do Inmetro está desatualizado e levava em consideração a época que a gasolina tinha a mistura de 22% de etanol, atualmente a mistura está em 27%. </p>
        
        <p>Segundo estudo realizado pelo <a href='https://autopapo.uol.com.br/noticia/porcentagem-gasolina-ou-etanol' target='_blank'>Instituto Mauá de Tecnologia</a> o desempenho do etanol foi de 0,707 a 0,754, ou seja uma média de 0,73. Para se ter uma base o estudo do Inmetro o desempenho foi de 0,667 a 0,721.</p>
        
      <p>Portanto é possível ainda levar em consideração o cálculo da divisão do valor do etanol pelo valor da gasolina com o resultado de 0,7, mas o cálculo atualizado para a realidade de hoje é de 0,73.</p>

      <p>A equação para o cálculo é:</p>
      <div style={{border: '1px solid black', width: '100%', padding: '15px', display: 'flex'}}>
      <div style={{marginTop: '10px', marginRight: '10px'}}>Resultado = </div>
        <div>
        <div style={{textDecoration: 'underline'}}>Valor do etanol</div>
        <div>Valor da gasolina</div>
        </div>
      </div>
        
      <p>
        Interpretação: se o resultado for menor do que 0,73, o etanol é mais vantajoso, caso contrário é melhor abastecer com a gasolina.
      </p>
      </section>

    <section style={{margin: '50px 10%', fontSize: '20px'}}>
        <h2>Vantagens do etanol</h2>
        <p>A vantagem de menor custo como dito acima vai depender muito da sua relação com o preço da gasolina, mas fora uma possível vantagem financeira o etanol tem algumas vantagens em relação a gasolina.</p>
        <p>Uma <a href='https://www.webmotors.com.br/wm1/dinheiro-e-economia/alcool-ou-gasolina-qual-combustivel-vale-pena'>das vantagem</a> é que o etanol é proveniente da fermentação da cana de açúcar, tornando-o renovável e independente de qualquer tipo de extração e também é menos poluente. Outra grande vantagem do etanol é que é um grande limpador de motor.</p>
        <p>As desvantagens do etanol é sua menor eficiência em relação a gasolina, ou seja numa viagem longa por exemplo seria necessário mais paradas para abastecimento.  </p>
      </section>

    <section style={{margin: '50px 10%', fontSize: '20px'}}>
        <h2>Vantagens da gasolina</h2>
        <p>Além de uma possível vantagem financeira que vai depender da sua relação de preço com o etanol, a gasolina tem como suas principais vantagem sua eficiência e o fato de ser considerado um ótimo lubrificante para o motor.</p>
        <p>A grande desvantagem da gasolina é que é uma fonte de combustível não renovável, ou seja, um dia vai acabar e por ser mais poluente do que o etanol inclusive sendo um grande emissor de monóxido de carbono que é extremamente tóxico para o organismo. </p>

    <p>Ambos os combustíveis tem suas vantagens e desvantagens e a escolha depende muito da forma de pensar. Se a escolha for somente financeira, basta fazer a divisão do valor do etanol pelo valor da gasolina e se o valor for abaixo de 0,73 o etanol é o combustível mais vantajoso, caso contrário a gasolina.</p>
      <p>Se a preocupação for com o meio ambiente, sem dúvidas a melhor escolha é o etanol, que além de ser uma fonte renovável emite menos poluentes na atmosfera.</p>
      <p>Quer fazer o cálculo automático dos combustíveis? Clique <a href='/'>aqui</a> e use nossa calculadora.</p>
      </section>

<a id='rendimento'></a>
      <Banner2 />
       <section style={{margin: '50px 10%', fontSize: '20px'}}>
        <h2 style={{fontSize: '35px'}}>Como calcular o consumo de combustível em km/l?</h2>
        <p>O cálculo do consumo de combustível em km/l é muito útil para fazer o planejamento de gasto de combustível, afinal não é possível ter total confiança dos números do rendimento passados pela fábrica, pois sempre há diferenças no modo de dirigir que dão divergências de resultados.</p>
        <p>Para que o cálculo seja mais preciso, é necessário ter em mente que o consumo entre etanol e gasolina são diferentes e que o gasto na estrada e na cidade também o são. Isso ocorre devido a inúmeros causas, como a maior quantidade de vezes que engatamos as marchas mais baixas, quantidade de frenagens entre outras.</p>
        <p>Neste post diremos como fazer o cálculo do consumo de combustível do seu carro e os modelos mais eficientes de carros nacionais. </p>
      </section>

    <section style={{margin: '50px 10%', fontSize: '20px'}}>
        <h2>Calculando o consumo de combustível em km/l</h2>
        <p>Para realizar este cálculo de maneira eficaz é necessário primeiro decidir se quer fazer a medição na estrada ou na cidade e qual combustível vai medir, se etanol ou gasolina que como dito tem divergências de valores. </p>
        <p>Após decidir, se o tanque tiver somente o combustível que se quer medir ir a um posto e completar, caso haja mistura é melhor esperar um momento mais oportuno. Ao completar o tanque zerar a quilometragem no painel ou anotar o valor.</p>
        <p>Depois ande alguns quilômetros na cidade ou na estrada, onde quiser saber o rendimento sendo o ideal andar mais do que 20 quilômetros.</p>
        
        <p>No final, complete o tanque novamente anotando quantos quilômetros andou e a quantidade de litros de combustível que gastou, Para realizar o cálculo use nossa <a href='/'>calculadora</a> selecionando o botão km/l e colocando os valores anotados ou realize o cálculo manualmente pela equação abaixo.</p>

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
        <p>O <a href='https://www.uol.com.br/carros/listas/inmetro-divulga-os-carros-flex-com-menor-consumo-em-2022-confira-o-top-10.htm'>Inmetro</a> divulgou recentemente (2022) a lista com os carros flex mais econômicos do país. Dentre eles estão</p>
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
      <p>Para facilitar o cálculo use nossa <a href='/'>calculadora</a>. Lá também é possível descobrir qual combustível é mais vantajoso e o gasto em combustível de uma viagem.</p>
      </section>

      <a id='dicas'></a>
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
        <p>Manter rotações altas e bruscas aumentam não somente o gasto com o combustível, mas também os gastos com a <a href='https://blog.sempararempresas.com.br/economizar-combustivel/' target='_blank'>embreagem</a>. Faça uma direção mais regular e suave e isso ajudará a diminuir o consumo de gasolina.</p>
        
      </section>
   
    <section style={{margin: '50px 10%', fontSize: '20px'}}>
        <h2>3) Calibre os pneus</h2>
        <p>Um pneu <a href='https://www.uol.com.br/carros/noticias/redacao/2022/03/22/dicas-para-economizar-combustivel-o-que-e-verdade-e-o-que-e-mito.htm'> murcho</a> aumenta o atrito, dificultando para o carro andar consequentemente aumentando os gastos com o combustível. Por isso é importante deixar os pneus sempre bem calibrados. É importante lembrar que encher muito o pneu ajuda ao carro ficar mais leve, no entanto o carro perde a estabilidade e pode perder até o próprio pneu.</p>
        
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
        <p>Quer saber uma forma de calcular seus gastos com combustível? Use nossa <a href to='/'>calculadora</a></p>
        
      </section>
        
        <section style={{margin: '50px 10%', fontSize: '20px'}}>
        <h2>Calculadora de combustível por km para cada litro (explicação)</h2>
        <p>Esta calculadora facilita na hora de descobrir o rendimento do carro em km/l. Para empregar a calculadora primeiro faça os seguintes passos:</p>
         <ul>
          <li>Complete o tanque com o combustível que quer descobrir o rendimento, se tiver misturado o cálculo não dará certo.</li>
           <li>No momento que completar zere a quilometragem no painel ou anote quantos quilômetros está marcando, antes de começar a andar.</li>
           <li>Ande alguns quilômetros na estrada ou cidade, onde você quiser testar o rendimento, sendo o ideal andar mais do que 20 quilômetros.</li>
           <a id='explicacaodicas' />
           <li>Depois complete o tanque novamente anotando quantos quilômetros andou e quantos litros está abastecendo e coloque na calculadora e você descobrirá o rendimento, na estrada, se andou na estrada ou na cidade, se andou na cidade.</li>
         </ul>

         <p>Com os valores anotados clique no botão km/l da calculadora e colocar os valores anotados e clicar em calcular.</p>
      </section>

      <section style={{margin: '50px 10%', fontSize: '20px'}}>
        <h2>Calculadora de consumo de combustível (explicação)</h2>
        <p>Esta calculadora serve para dois momentos, quando quer descobrir quanto se gasta numa viagem com combustível ou quando se quer descobrir quantos quilômetros é possível andar com um valor fixo, por exemplo R$ 300,00. A explicação do uso das duas calculadoras estão abaixo.</p>

        <h3 style={{color: 'darkgray', marginBottom: '-10px'}}>Calculadora de consumo de combustível (também para viagens)</h3>
        <p>Para descobrir o custo do consumo de combustível  basta selecionar a calculadora Consumo e depois colocar os dados solicitados nas áreas em questão e clicar em calcular.</p>
        <h3 style={{color: 'darkgray', marginBottom: '-10px'}}>Calculadora distância com custo fixo</h3>
        <p>Para descobrir a distância percorrida com um valor fixo, selecione a calculadora viagem depois clique no botão 'interruptor' abaixo do botão da gasolina x etanol. Depois coloque os valores nos locais indicados e apertar em calcular.</p>
       
      </section>
<a id='etanol'></a>
      
      <BannerBlog1 />
      <section style={{margin: '50px 10%', fontSize: '20px'}}>
        <h2 style={{fontSize: '35px'}}>Como calcular qual combustível compensa na hora de abastecer?</h2>
        <p>A escolha do melhor combustível sempre foi uma preocupação para todos os motoristas desde que surgiu o carro flex. Afinal quando é melhor abastecer com etanol e quando a gasolina é mais vantajosa? </p>
        <p>Ambos os combustíveis tem suas vantagens e desvantagens. Por isso é interessante não levar somente o bolso na hora da escolha. </p>
        <p>Quer saber mais sobre este assunto. Continue a leitura deste post. </p>
      </section>

    <section style={{margin: '50px 10%', fontSize: '20px'}}>
        <h2>Calculo para verificar qual combustível compensa mais na hora de abastecer</h2>
        <p>Para descobrir qual combustível compensa mais na hora do abastecimento basta fazer um cálculo simples. O primeiro passo anote o valor do etanol e da gasolina. </p>
        <p>Faça a divisão do valor do etanol e divida pelo valor da gasolina. Segundo os testes feitos pelo Inmetro e levando em consideração cálculos mais conservadores, se esse valor der abaixo de 0,7 compensa mais o etanol, caso contrário a gasolina. </p>
        <p>No entanto o cálculo do Inmetro está desatualizado e levava em consideração a época que a gasolina tinha a mistura de 22% de etanol, atualmente a mistura está em 27%. </p>
        
        <p>Segundo estudo realizado pelo <a href='https://autopapo.uol.com.br/noticia/porcentagem-gasolina-ou-etanol' target='_blank'>Instituto Mauá de Tecnologia</a> o desempenho do etanol foi de 0,707 a 0,754, ou seja uma média de 0,73. Para se ter uma base o estudo do Inmetro o desempenho foi de 0,667 a 0,721.</p>
        
      <p>Portanto é possível ainda levar em consideração o cálculo da divisão do valor do etanol pelo valor da gasolina com o resultado de 0,7, mas o cálculo atualizado para a realidade de hoje é de 0,73.</p>

      <p>A equação para o cálculo é:</p>
      <div style={{border: '1px solid black', width: '100%', padding: '15px', display: 'flex'}}>
      <div style={{marginTop: '10px', marginRight: '10px'}}>Resultado = </div>
        <div>
        <div style={{textDecoration: 'underline'}}>Valor do etanol</div>
        <div>Valor da gasolina</div>
        </div>
      </div>
        
      <p>
        Interpretação: se o resultado for menor do que 0,73, o etanol é mais vantajoso, caso contrário é melhor abastecer com a gasolina.
      </p>
      </section>

    <section style={{margin: '50px 10%', fontSize: '20px'}}>
        <h2>Vantagens do etanol</h2>
        <p>A vantagem de menor custo como dito acima vai depender muito da sua relação com o preço da gasolina, mas fora uma possível vantagem financeira o etanol tem algumas vantagens em relação a gasolina.</p>
        <p>Uma <a href='https://www.webmotors.com.br/wm1/dinheiro-e-economia/alcool-ou-gasolina-qual-combustivel-vale-pena'>das vantagem</a> é que o etanol é proveniente da fermentação da cana de açúcar, tornando-o renovável e independente de qualquer tipo de extração e também é menos poluente. Outra grande vantagem do etanol é que é um grande limpador de motor.</p>
        <p>As desvantagens do etanol é sua menor eficiência em relação a gasolina, ou seja numa viagem longa por exemplo seria necessário mais paradas para abastecimento.  </p>
      </section>

    <section style={{margin: '50px 10%', fontSize: '20px'}}>
        <h2>Vantagens da gasolina</h2>
        <p>Além de uma possível vantagem financeira que vai depender da sua relação de preço com o etanol, a gasolina tem como suas principais vantagem sua eficiência e o fato de ser considerado um ótimo lubrificante para o motor.</p>
        <p>A grande desvantagem da gasolina é que é uma fonte de combustível não renovável, ou seja, um dia vai acabar e por ser mais poluente do que o etanol inclusive sendo um grande emissor de monóxido de carbono que é extremamente tóxico para o organismo. </p>

    <p>Ambos os combustíveis tem suas vantagens e desvantagens e a escolha depende muito da forma de pensar. Se a escolha for somente financeira, basta fazer a divisão do valor do etanol pelo valor da gasolina e se o valor for abaixo de 0,73 o etanol é o combustível mais vantajoso, caso contrário a gasolina.</p>
      <p>Se a preocupação for com o meio ambiente, sem dúvidas a melhor escolha é o etanol, que além de ser uma fonte renovável emite menos poluentes na atmosfera.</p>
      <p>Quer fazer o cálculo automático dos combustíveis? Clique <a href='/'>aqui</a> e use nossa calculadora.</p>
      </section>

<a id='rendimento'></a>
      <Banner2 />
       <section style={{margin: '50px 10%', fontSize: '20px'}}>
        <h2 style={{fontSize: '35px'}}>Como calcular o consumo de combustível em km/l?</h2>
        <p>O cálculo do consumo de combustível em km/l é muito útil para fazer o planejamento de gasto de combustível, afinal não é possível ter total confiança dos números do rendimento passados pela fábrica, pois sempre há diferenças no modo de dirigir que dão divergências de resultados.</p>
        <p>Para que o cálculo seja mais preciso, é necessário ter em mente que o consumo entre etanol e gasolina são diferentes e que o gasto na estrada e na cidade também o são. Isso ocorre devido a inúmeros causas, como a maior quantidade de vezes que engatamos as marchas mais baixas, quantidade de frenagens entre outras.</p>
        <p>Neste post diremos como fazer o cálculo do consumo de combustível do seu carro e os modelos mais eficientes de carros nacionais. </p>
      </section>

    <section style={{margin: '50px 10%', fontSize: '20px'}}>
        <h2>Calculando o consumo de combustível em km/l</h2>
        <p>Para realizar este cálculo de maneira eficaz é necessário primeiro decidir se quer fazer a medição na estrada ou na cidade e qual combustível vai medir, se etanol ou gasolina que como dito tem divergências de valores. </p>
        <p>Após decidir, se o tanque tiver somente o combustível que se quer medir ir a um posto e completar, caso haja mistura é melhor esperar um momento mais oportuno. Ao completar o tanque zerar a quilometragem no painel ou anotar o valor.</p>
        <p>Depois ande alguns quilômetros na cidade ou na estrada, onde quiser saber o rendimento sendo o ideal andar mais do que 20 quilômetros.</p>
        
        <p>No final, complete o tanque novamente anotando quantos quilômetros andou e a quantidade de litros de combustível que gastou, Para realizar o cálculo use nossa <a href='/'>calculadora</a> selecionando o botão km/l e colocando os valores anotados ou realize o cálculo manualmente pela equação abaixo.</p>

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
        <p>O <a href='https://www.uol.com.br/carros/listas/inmetro-divulga-os-carros-flex-com-menor-consumo-em-2022-confira-o-top-10.htm'>Inmetro</a> divulgou recentemente (2022) a lista com os carros flex mais econômicos do país. Dentre eles estão</p>
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
      <p>Para facilitar o cálculo use nossa <a href='/'>calculadora</a>. Lá também é possível descobrir qual combustível é mais vantajoso e o gasto em combustível de uma viagem.</p>
      </section>

      <a id='dicas'></a>
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
        <p>Manter rotações altas e bruscas aumentam não somente o gasto com o combustível, mas também os gastos com a <a href='https://blog.sempararempresas.com.br/economizar-combustivel/' target='_blank'>embreagem</a>. Faça uma direção mais regular e suave e isso ajudará a diminuir o consumo de gasolina.</p>
        
      </section>
   
    <section style={{margin: '50px 10%', fontSize: '20px'}}>
        <h2>3) Calibre os pneus</h2>
        <p>Um pneu <a href='https://www.uol.com.br/carros/noticias/redacao/2022/03/22/dicas-para-economizar-combustivel-o-que-e-verdade-e-o-que-e-mito.htm'> murcho</a> aumenta o atrito, dificultando para o carro andar consequentemente aumentando os gastos com o combustível. Por isso é importante deixar os pneus sempre bem calibrados. É importante lembrar que encher muito o pneu ajuda ao carro ficar mais leve, no entanto o carro perde a estabilidade e pode perder até o próprio pneu.</p>
        
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
        <p>Quer saber uma forma de calcular seus gastos com combustível? Use nossa <a href to='/'>calculadora</a></p>
        
      </section>

      

      <section style={{margin: '5%', fontSize: '20px'}}>
        <h2 style={{color: '#1976d5'}}>Calculadora de combustível gasolina x etanol</h2>
        <p>Esta calculadora é muito útil para saber qual combustível compensa mais, trazendo economia. Para usá-la é muito simples. Basta colocar o valor na bomba da gasolina e do etanol, clicar em calcular e a calculadora dará a melhor opção de abastecimento.</p>
        <p>A gasolina tem a vantagem de render mais, por isso muitas vezes, mesmo o preço sendo maior vale mais abastecer com gasolina. Por outro lado o etanol, além de ser mais barato ele aumenta um pouco a potência do motor. </p>
        <p>A calculadora foi feita baseada em estudos mais recentes realizados pelo <a href='https://autopapo.uol.com.br/noticia/porcentagem-gasolina-ou-etanol/' target='_blank'>Instituto Mauá de Tecnologia</a>  que foi levado em consideração a mistura da gasolina com o etanol atual de 27% e a proporção máxima recomendada é de 73%. A antiga conta de 70%, ou 0,7, levava em consideração a mistura da gasolina que era de 22%.  </p>
      </section>

       <section style={{margin: '5%', fontSize: '20px'}}>
        <h2 style={{color: '#1976d5'}}>Calculadora de combustível por km para cada litro</h2>
        <p>Esta calculadora facilita na hora de descobrir o rendimento do carro em km/l. Para empregar a calculadora primeiro faça os seguintes passos:</p>
         <ul>
          <li>Complete o tanque com o combustível que quer descobrir o rendimento, se tiver misturado o cálculo não dará certo.</li>
           <li>No momento que completar zere a quilometragem no painel ou anote quantos quilômetros está marcando, antes de começar a andar.</li>
           <li>Ande alguns quilômetros na estrada ou cidade, onde você quiser testar o rendimento, sendo o ideal andar mais do que 20 quilômetros.</li>
           <li>Depois complete o tanque novamente anotando quantos quilômetros andou e quantos litros está abastecendo e coloque na calculadora e você descobrirá o rendimento, na estrada, se andou na estrada ou na cidade, se andou na cidade.</li>
         </ul>

         <p>Com os valores anotados clique no botão km/l da calculadora e colocar os valores anotados e clicar em calcular.</p>
      </section>

      <section style={{margin: '5%', fontSize: '20px'}}>
        <h2 style={{color: '#1976d5'}}>Calculadora de consumo de combustível</h2>
        <p>Esta calculadora serve para dois momentos, quando quer descobrir quanto se gasta numa viagem com combustível ou quando se quer descobrir quantos quilômetros é possível andar com um valor fixo, por exemplo R$ 300,00. A explicação do uso das duas calculadoras estão abaixo.</p>

        <h3 style={{ marginBottom: '-10px'}}>Calculadora de consumo de combustível (também para viagens)</h3>
        <p>Para descobrir o custo do consumo de combustível  basta selecionar a calculadora Consumo e depois colocar os dados solicitados nas áreas em questão e clicar em calcular.</p>
        <h3 style={{ marginBottom: '-10px'}}>Calculadora distância com custo fixo</h3>
        <p>Para descobrir a distância percorrida com um valor fixo, selecione a calculadora viagem depois clique no botão interruptor abaixo do botão da gasolina x etanol. Depois coloque os valores nos locais indicados e apertar em calcular.</p>
       
      </section>
      <Footer />
      
    </main>
      
      
    </>
  )
}

export default Home;