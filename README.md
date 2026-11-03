# 💰 Fincheck

<div align="center">
  <h3>Aplicação Full-Stack de Controle Financeiro Pessoal</h3>
  <p>Gerencie suas finanças de forma eficiente, acompanhando despesas, receitas e saldos de suas contas bancárias.</p>
</div>

<img width="2160" height="1536" alt="image" src="https://github.com/user-attachments/assets/f6f2127b-a087-41b2-9a60-5b7448a8a863" />
<img width="2160" height="1536" alt="image" src="https://github.com/user-attachments/assets/e7b0c233-d323-4927-b12e-3bcd81f44c29" />


---

## 📋 Sobre o Projeto

O **Fincheck** é uma aplicação completa de gerenciamento financeiro pessoal que permite aos usuários:

- ✅ Criar e gerenciar múltiplas contas bancárias
- ✅ Registrar transações de receitas e despesas
- ✅ Categorizar transações com ícones personalizados
- ✅ Visualizar saldos atualizados em tempo real
- ✅ Filtrar transações por período, conta e tipo
- ✅ Interface moderna e responsiva

---

## 🛠️ Tecnologias Utilizadas

### Backend
- **[NestJS](https://nestjs.com/)** - Framework Node.js para construção de aplicações escaláveis
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Prisma ORM](https://www.prisma.io/)** - ORM moderno para Node.js e TypeScript
- **[PostgreSQL](https://www.postgresql.org/)** - Banco de dados relacional
- **[JWT](https://jwt.io/)** - Autenticação baseada em tokens
- **[Bcrypt](https://github.com/kelektiv/node.bcrypt.js)** - Hash de senhas

### Frontend
- **[React](https://react.dev/)** - Biblioteca JavaScript para construção de interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[Vite](https://vitejs.dev/)** - Build tool e dev server
- **[TailwindCSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de formulários
- **[Zod](https://zod.dev/)** - Validação de esquemas TypeScript-first
- **[TanStack Query](https://tanstack.com/query)** - Gerenciamento de estado assíncrono
- **[Axios](https://axios-http.com/)** - Cliente HTTP
- **[React Router](https://reactrouter.com/)** - Roteamento
- **[Radix UI](https://www.radix-ui.com/)** - Componentes UI acessíveis
- **[date-fns](https://date-fns.org/)** - Manipulação de datas

---

## 🗄️ Modelagem do Banco de Dados

<img width="2666" height="1545" alt="ERD - Fincheck" src="https://github.com/user-attachments/assets/ac578171-948c-4f78-a578-36da3cd75ad5" />

### Entidades Principais

- **Users** - Usuários do sistema
- **BankAccounts** - Contas bancárias (Corrente, Investimento, Dinheiro)
- **Categories** - Categorias de transações com ícones
- **Transactions** - Transações de receitas e despesas

---

## 🚀 Funcionalidades

### 🔐 Autenticação e Autorização
- Registro de novos usuários (Sign Up)
- Login com JWT (Sign In)
- Proteção de rotas com Guards
- Validação de propriedade de recursos

### 🏦 Contas Bancárias
- CRUD completo de contas bancárias
- Tipos de conta: Corrente, Investimento e Dinheiro
- Saldo inicial configurável
- Cores personalizadas para identificação visual
- Cálculo automático de saldo atual

### 📊 Categorias
- Listagem de categorias por usuário
- Separação por tipo (Receita/Despesa)
- Ícones personalizados
- Associação automática com transações

### 💸 Transações
- Criação de transações de receita e despesa
- Edição e exclusão de transações
- Filtros por:
  - Ano e mês (obrigatório)
  - Conta bancária (opcional)
  - Tipo de transação (opcional)
- Vinculação com categorias e contas

---

## 📁 Estrutura do Projeto

```
fincheck/
├── api/                          # Backend NestJS
│   ├── prisma/
│   │   ├── schema.prisma        # Schema do banco de dados
│   │   └── migrations/          # Migrações do Prisma
│   ├── src/
│   │   ├── modules/
│   │   │   ├── auth/            # Módulo de autenticação
│   │   │   ├── users/           # Módulo de usuários
│   │   │   ├── bank-accounts/   # Módulo de contas bancárias
│   │   │   ├── categories/      # Módulo de categorias
│   │   │   └── transactions/    # Módulo de transações
│   │   └── shared/
│   │       ├── config/          # Configurações
│   │       ├── database/        # Serviço do Prisma
│   │       ├── decorators/      # Decorators customizados
│   │       └── pipes/           # Pipes de validação
│   └── package.json
│
└── front-end/                   # Frontend React
    ├── src/
    │   ├── app/
    │   │   ├── config/          # Configurações
    │   │   ├── contexts/        # Contextos React
    │   │   ├── entities/        # Entidades TypeScript
    │   │   ├── hooks/           # Hooks customizados
    │   │   ├── services/        # Serviços de API
    │   │   └── utils/           # Utilitários
    │   ├── view/
    │   │   ├── components/      # Componentes reutilizáveis
    │   │   ├── layouts/         # Layouts da aplicação
    │   │   └── pages/           # Páginas
    │   │       ├── Dashboard/   # Dashboard principal
    │   │       ├── Login/       # Página de login
    │   │       └── Register/    # Página de cadastro
    │   └── Router/              # Configuração de rotas
    └── package.json
```

---

## ⚙️ Instalação e Configuração

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) (v14 ou superior)

### 🔧 Configuração do Backend

1. **Clone o repositório**
```bash
git clone https://github.com/Viniciusrbr/fincheck.git
cd fincheck
```

2. **Acesse a pasta do backend**
```bash
cd api
```

3. **Instale as dependências**
```bash
npm install
```

4. **Configure as variáveis de ambiente**

Crie um arquivo `.env` na pasta `api/` com as seguintes variáveis:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/fincheck"
JWT_SECRET="sua-chave-secreta-aqui"
PORT=3000
```

5. **Execute as migrações do banco de dados**
```bash
npx prisma migrate dev
```

6. **Inicie o servidor de desenvolvimento**
```bash
npm run start:dev
```

O backend estará rodando em `http://localhost:3000`

### 🎨 Configuração do Frontend

1. **Acesse a pasta do frontend**
```bash
cd front-end
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env` na pasta `front-end/` (se necessário):

```env
VITE_API_URL=http://localhost:3000
```

4. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

O frontend estará rodando em `http://localhost:5173`

---

## 📝 Scripts Disponíveis

### Backend

```bash
# Desenvolvimento
npm run start:dev

# Build de produção
npm run build

# Iniciar em produção
npm run start:prod

# Executar testes
npm run test

# Lint
npm run lint

# Verificar tipos
npm run typecheck
```

### Frontend

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview da build
npm run preview

# Lint
npm run lint
```

---

## 🗃️ Comandos Prisma

```bash
# Criar uma nova migração
npx prisma migrate dev --name nome_da_migracao

# Aplicar migrações
npx prisma migrate deploy

# Abrir Prisma Studio (GUI para visualizar dados)
npx prisma studio

# Gerar Prisma Client
npx prisma generate

# Resetar banco de dados
npx prisma migrate reset
```

---

## 🏗️ Arquitetura e Padrões

### Backend
- **Arquitetura Modular** - Organização por domínios/recursos
- **DTOs** - Validação e tipagem de dados de entrada
- **Guards** - Proteção e autorização de rotas
- **Decorators** - Customização para acesso a dados da requisição
- **Services** - Lógica de negócio isolada
- **Repository Pattern** - Acesso aos dados via Prisma

### Frontend
- **Component-Based** - Componentes reutilizáveis e isolados
- **Custom Hooks** - Lógica compartilhada e reutilizável
- **Context API** - Gerenciamento de estado global
- **Server State** - TanStack Query para cache e sincronização
- **Form Validation** - React Hook Form + Zod
- **Atomic Design** - Organização de componentes

---

## 🔒 Segurança

- ✅ Senhas criptografadas com Bcrypt
- ✅ Autenticação JWT com tokens seguros
- ✅ Validação de dados de entrada com class-validator (backend) e Zod (frontend)
- ✅ Proteção contra SQL Injection via Prisma
- ✅ CORS configurado
- ✅ Validação de propriedade de recursos
