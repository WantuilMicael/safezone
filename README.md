# Registro de Manchas Criminais

Este é um projeto desenvolvido em React com o objetivo de registrar e visualizar manchas criminais em uma interface interativa e fácil de usar. O projeto foi criado como parte da iniciação científica da **Faculdade Candido Mendes**.

![Imagem do Dash]

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface do usuário.
- **Yarn**: Gerenciador de pacotes para instalação e gerenciamento de dependências.
- **HTML5 e CSS3**: Para estrutura e estilização da página.
- **API Google Maps**: Para o mapa, foi utiliza a API do Google Maps

## Funcionalidades

- Registro de manchas criminais por região.
- Visualização de manchas criminais registradas.
- Interatividade para explorar dados de forma eficiente.
- Pagina de noticias
- Pagina para contatos

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão recomendada: 18+)
- [Yarn](https://yarnpkg.com/)

## Como Rodar o Projeto

1. Crie o arquivo para utilizar a API

    crie o arquivo .env.local para utilizar a API do Google Maps

2. Clone este repositório:

    bash git clone https://github.com/seu-usuario/nome-do-repositorio.git

3. Acesse o diretório do projeto:

    cd nome-do-repositorio

4. Instale as dependências:

    yarn install

5. Inicie o servidor de desenvolvimento:

    yarn start

6. Abra o navegador e acesse:

   http://localhost:3000

## Estrutura do Projeto

├── src
│   ├── components   # Componentes reutilizáveis
│   ├── pages        # Páginas principais do site
│   ├── services     # Serviços para integração com APIs
│   ├── assets       # Imagens, ícones e outros recursos estáticos
│   ├── App.js       # Componente principal
│   └── index.js     # Ponto de entrada da aplicação
├── public           # Arquivos públicos
├── package.json     # Configuração do projeto e dependências
└── README.md        # Documentação do projeto