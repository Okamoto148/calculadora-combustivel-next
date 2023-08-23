import Header from './Components/Header';
import Tipo from './Components/Tipo';
import {useState,useEffect} from 'react';
import InputText from './Components/InputText';
import DialogNovo from './Components/DialogNovo';
import Button from '@mui/material/Button';
import Dialog from './Components/Dialog';
import Banner from './Components/Banners/Banner';
import {Helmet} from "react-helmet";
import HeaderSite from './Components/HeaderSite';
import styles from '../styles/Home.module.css';

const Home = () =>{
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
        <meta name="description" content="Calcule aqui qual combustível é o mais vantajoso (etanol ou gasolina), o rendimento do carro em km/l ou o custo do combustível para uma viagem." />
        <link rel="icon" href="./img/combustivel.png" />
    </Helmet>
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
      <div className={styles.freepik}><a href="https://br.freepik.com/vetores-gratis/conceito-de-nutricionista-terapia-nutricional-com-alimentacao-saudavel-e-atividade-fisica-programa-de-perda-de-peso-e-conceito-de-dieta-ilustracao-vetorial-em-estilo-cartoon_26432857.htm#query=perda%20de%20peso&position=16&from_view=search">Image by vector4stock</a> on <a href="https://br.freepik.com/">Freepik</a></div>

      <section style={{margin: '5%', fontSize: '20px'}}>
        <h2>Calculadora de combustível gasolina x etanol</h2>
        <p>Esta calculadora é muito útil para saber qual combustível compensa mais, trazendo economia. Para usá-la é muito simples. Basta colocar o valor na bomba da gasolina e do etanol, clicar em calcular e a calculadora dará a melhor opção de abastecimento.</p>
        <p>A gasolina tem a vantagem de render mais, por isso muitas vezes, mesmo o preço sendo maior vale mais abastecer com gasolina. Por outro lado o etanol, além de ser mais barato ele aumenta um pouco a potência do motor. </p>
        <p>A calculadora foi feita baseada em estudos mais recentes realizados pelo <a href='https://autopapo.uol.com.br/noticia/porcentagem-gasolina-ou-etanol/' target='_blank'>Instituto Mauá de Tecnologia</a>  que foi levado em consideração a mistura da gasolina com o etanol atual de 27% e a proporção máxima recomendada é de 73%. A antiga conta de 70%, ou 0,7, levava em consideração a mistura da gasolina que era de 22%.  </p>
      </section>

       <section style={{margin: '5%', fontSize: '20px'}}>
        <h2>Calculadora de combustível por km para cada litro</h2>
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
        <h2>Calculadora de consumo de combustível</h2>
        <p>Esta calculadora serve para dois momentos, quando quer descobrir quanto se gasta numa viagem com combustível ou quando se quer descobrir quantos quilômetros é possível andar com um valor fixo, por exemplo R$ 300,00. A explicação do uso das duas calculadoras estão abaixo.</p>

        <h3 style={{color: 'darkgray', marginBottom: '-10px'}}>Calculadora de consumo de combustível (também para viagens)</h3>
        <p>Para descobrir o custo do consumo de combustível  basta selecionar a calculadora Consumo e depois colocar os dados solicitados nas áreas em questão e clicar em calcular.</p>
        <h3 style={{color: 'darkgray', marginBottom: '-10px'}}>Calculadora distância com custo fixo</h3>
        <p>Para descobrir a distância percorrida com um valor fixo, selecione a calculadora viagem depois clique no botão interruptor abaixo do botão da gasolina x etanol. Depois coloque os valores nos locais indicados e apertar em calcular.</p>
       
      </section>
      
    </main>
      
      
    </>
  )
}

export default Home;