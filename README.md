# Sistema de votos em Real Time

<div>
  <p>Projeto criado a partir da NLW Expert (Node.js), com o objetivo de fazer um sistema de enquetes com votação em tempo real, gerando uma classificação entre as opções.</p>
  <h2>Tecnologias usadas</h2>
  <ul>
    <li>Docker</li>
    <li>Node.js</li>
    <li>Fastify</li>
    <li>PostgreSQL</li>
    <li>ORM Prisma</li>
    <li>Redis</li>
    <li>Websocket</li>
  </ul>

  <h2>O que aprendi com o Projeto</h2>
  <ul>
    <li>Aprendi a implementar comunicação em tempo real utilizando o protocolo WebSocket para a votação em uma enquete.</li>
    <li>Desenvolvi pelo Fastify para lidar com requisições HTTP de forma eficiente.</li>
    <li>Aprofundei meu conhecimento em contêineres, utilizando o Docker para criar uma instância do banco de dados.</li>
    <li>Usei o Prisma para comunicação simplificada com o banco de dados, incluindo o gerenciamento do versionamento das mudanças.</li>
    <li>Aprendi a utilizar a biblioteca Zod para validar os tipos de dados, garantindo a integridade dos dados da aplicação.</li>
    <li>Adquiri experiência no uso do Redis para armazenamento em cache, otimizando o desempenho da aplicação.</li>
  </ul>
  
  <h2>Configuração</h2>
  <ul>
    <li>Clone o repositório</li>
    <li>Instale dependências (<code>npm install</code>)</li>
    <li>Configuração PostgreSQL e Redis (<code>docker compose up -d</code>)</li>
    <li>Cópia <code>.env.example</code> (<code>cp .env.example .env</code>)</li>
    <li>Aplicação de execução (<code>npm run dev</code>)</li>
    <li>Testar (A partir do routes.http ou ferramentas como o <a href="https://hoppscotch.io/">Hoppscoth</a>)</li>
  </ul>
</div>

