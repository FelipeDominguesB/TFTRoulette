# TFTRoulette
## Uma API e Website demonstrando o funcionamento do jogo Teamfight Tactics

Uma API que clona o jogo TFT, desenvolvida utilizando conhecimentos em NodeJs e Express. Essa API foi criada com dois propósitos:

1. Estudar programação com probabilidade

Reproduzir um jogo que sou familiarizado me pareceu a maneira mais prática de entender como lidar com probabilidades voláteis e escassez de elementos em um jogo. De acordo com cada nível do jogador os campeões que podem aparecer e qual a porcetagem atríbuida pra cada um muda, o código está escrito para lidar com isso de maneira dinâmica e facilmente modificável.  


2. Estudar a criação de API's para a Web

Toda a manipulação de campeões é feita através de uma API para a web, ou seja, os campeões são consultados e são apresentados na roleta do jogador através de um processamento server-side, garantindo integridade nas consultas. Esse é um conhecimento essencial na criação de aplicações mais robustas.


## Como ter acesso ao conteúdo da API
Para rodar a API, você deve instalar as dependências do projeto através do seguinte comando na raíz do projeto:  

`npm install`
Após o término da instalação das dependências, você deve rodar o seguinte código na raiz do projeto:
`node index.js`
Tendo feito isso, a API estará acessível no endereço http://localhost:3000 


## As rotas da API

```GET: /champions```: Retorna todos os campeões.
```GET: /champions/level/:playerLevel```: Retorna todos os possíveis campeões de acordo com o nível informado.
```GET: /champions/level/:playerLevel/roulette```: Retorna um campeão aleatório de acordo com o nível informado, cada campeão retirado através dessa rota sofre redução na disponibilidade total. Ou seja, se um campeão possuir disponibilidade de 36, cada vez que ele for invocado pela API será reduzido 1 de sua disponibilidade. Essa rota não retorna campeões que não tenham disponibilidade.
```GET: /champions/cost/:championCost```: Retorna todos os campeões até determinado custo
```POST: /champions/:championName/roulette```: Adiciona para a disponibilidade de um campeão na roleta.


