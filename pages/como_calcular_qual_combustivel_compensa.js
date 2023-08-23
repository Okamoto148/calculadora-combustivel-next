import BannerBlog1 from './Components/Banners/BannerBlog1';
import Link from 'next/link';
import HeaderSite from './Components/HeaderSite';

export default function BlogPost1(){

  return(
  <>
    <HeaderSite />
    <BannerBlog1 />

    <section style={{margin: '50px 10%', fontSize: '20px'}}>
        <h1 style={{fontSize: '35px'}}>Como calcular qual combustível compensa na hora de abastecer?</h1>
        <p>A escolha do melhor combustível sempre foi uma preocupação para todos os motoristas desde que surgiu o carro flex. Afinal quando é melhor abastecer com etanol e quando a gasolina é mais vantajosa? </p>
        <p>Ambos os combustíveis tem suas vantagens e desvantagens. Por isso é interessante não levar somente o bolso na hora da escolha. </p>
        <p>Quer saber mais sobre este assunto. Continue a leitura deste post. </p>
      </section>

    <section style={{margin: '50px 10%', fontSize: '20px'}}>
        <h2>Calculo para verificar qual combustível compensa mais na hora de abastecer</h2>
        <p>Para descobrir qual combustível compensa mais na hora do abastecimento basta fazer um cálculo simples. O primeiro passo anote o valor do etanol e da gasolina. </p>
        <p>Faça a divisão do valor do etanol e divida pelo valor da gasolina. Segundo os testes feitos pelo Inmetro e levando em consideração cálculos mais conservadores, se esse valor der abaixo de 0,7 compensa mais o etanol, caso contrário a gasolina. </p>
        <p>No entanto o cálculo do Inmetro está desatualizado e levava em consideração a época que a gasolina tinha a mistura de 22% de etanol, atualmente a mistura está em 27%. </p>
        
        <p>Segundo estudo realizado pelo <Link href='https://autopapo.uol.com.br/noticia/porcentagem-gasolina-ou-etanol' target='_blank'>Instituto Mauá de Tecnologia</Link> o desempenho do etanol foi de 0,707 a 0,754, ou seja uma média de 0,73. Para se ter uma base o estudo do Inmetro o desempenho foi de 0,667 a 0,721.</p>
        
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
        <p>Uma <Link href='https://www.webmotors.com.br/wm1/dinheiro-e-economia/alcool-ou-gasolina-qual-combustivel-vale-pena'>das vantagem</Link> é que o etanol é proveniente da fermentação da cana de açúcar, tornando-o renovável e independente de qualquer tipo de extração e também é menos poluente. Outra grande vantagem do etanol é que é um grande limpador de motor.</p>
        <p>As desvantagens do etanol é sua menor eficiência em relação a gasolina, ou seja numa viagem longa por exemplo seria necessário mais paradas para abastecimento.  </p>
      </section>

    <section style={{margin: '50px 10%', fontSize: '20px'}}>
        <h2>Vantagens da gasolina</h2>
        <p>Além de uma possível vantagem financeira que vai depender da sua relação de preço com o etanol, a gasolina tem como suas principais vantagem sua eficiência e o fato de ser considerado um ótimo lubrificante para o motor.</p>
        <p>A grande desvantagem da gasolina é que é uma fonte de combustível não renovável, ou seja, um dia vai acabar e por ser mais poluente do que o etanol inclusive sendo um grande emissor de monóxido de carbono que é extremamente tóxico para o organismo. </p>

    <p>Ambos os combustíveis tem suas vantagens e desvantagens e a escolha depende muito da forma de pensar. Se a escolha for somente financeira, basta fazer a divisão do valor do etanol pelo valor da gasolina e se o valor for abaixo de 0,73 o etanol é o combustível mais vantajoso, caso contrário a gasolina.</p>
      <p>Se a preocupação for com o meio ambiente, sem dúvidas a melhor escolha é o etanol, que além de ser uma fonte renovável emite menos poluentes na atmosfera.</p>
      <p>Quer fazer o cálculo automático dos combustíveis? Clique <Link href='/'>aqui</Link> e use nossa calculadora.</p>
      </section>
  </>
    
  )
}