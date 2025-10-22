
# Fincheck - Aplicação de Controle Financeiro

Fincheck é uma aplicação full-stack de controle financeiro pessoal que permite aos usuários gerenciar suas finanças de forma eficiente, acompanhando despesas, receitas e saldos de suas contas bancárias.

### Modelagem do Banco de Dados

<img width="2666" height="1545" alt="ERD - Ficheck" src="https://github.com/user-attachments/assets/ac578171-948c-4f78-a578-36da3cd75ad5" />

## Backend (API)

A API do Fincheck foi desenvolvida utilizando NestJS com TypeScript e Prisma ORM para interação com o banco de dados PostgreSQL.

### Funcionalidades Implementadas

#### Autenticação e Usuários
- **Sistema de Autenticação**: Implementação de registro (signup) e login (signin) de usuários
- **Proteção de Rotas**: Utilização de Guards para proteger rotas que requerem autenticação
- **JWT**: Autenticação baseada em tokens JWT

#### Contas Bancárias
- **CRUD Completo**: Implementação de operações de criação, leitura, atualização e exclusão de contas bancárias
- **Validação de Propriedade**: Verificação se o usuário é o proprietário da conta bancária antes de permitir operações
- **Tipagem**: Suporte para diferentes tipos de contas (corrente, investimento, dinheiro)

#### Categorias
- **Listagem de Categorias**: Endpoint para listar todas as categorias do usuário
- **Categorização por Tipo**: Categorias separadas por tipo (receita ou despesa)
- **Ícones**: Suporte para associação de ícones às categorias

### Estrutura do Projeto
- Arquitetura modular usando o framework NestJS
- Organização por módulos (auth, users, bank-accounts, categories)
- Uso de DTOs para validação de dados de entrada
- Implementação de decorators personalizados para facilitar o acesso ao ID do usuário ativo
- Serviço Prisma centralizado para interação com o banco de dados

### Próximas Implementações

#### Transações
- **CRUD de Transações**: Implementação de métodos para criar, listar, atualizar e deletar transações
- **Validação de Acesso**: Garantir que apenas o usuário correto possa realizar operações em suas transações
- **Filtros**: 
  - Filtros obrigatórios por ano e mês
  - Filtro opcional por conta bancária
  - Filtro por tipo de transação (receita ou despesa)

#### Cálculo de Saldos
- Implementação do cálculo de saldo atual de contas bancárias
- Soma do saldo inicial com as receitas e subtração das despesas
- Utilização do Prisma para fazer join entre contas e transações

#### Melhorias Técnicas
- Ajuste da tipagem no TypeScript para lidar com dados dinâmicos
- Configuração de CORS para permitir requisições de diferentes origens
- Melhorias na validação e tratamento de erros

## Frontend

*O desenvolvimento do frontend está em andamento.*

## Como Executar o Projeto

### Requisitos
- Node.js
- PostgreSQL
- npm ou yarn

### Configuração do Backend
1. Navegue até a pasta da API:
```
cd api
```

2. Instale as dependências:
```
npm install
```

3. Configure as variáveis de ambiente criando um arquivo `.env` baseado no `.env.example`

4. Execute as migrations do Prisma:
```
npx prisma migrate dev
```

5. Inicie o servidor:
```
npm run start:dev
```

O servidor estará disponível em `http://localhost:3000`.

## Licença
[MIT]
