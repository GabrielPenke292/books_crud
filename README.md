# 📚 Sistema de Gerenciamento de Livros

Uma aplicação web moderna para gerenciar uma biblioteca de livros, desenvolvida com React no frontend e Node.js/Express no backend, utilizando MySQL como banco de dados.

## ✨ Funcionalidades

### 📖 **Gerenciamento de Livros**
- **Visualizar todos os livros** em um layout de cards responsivo
- **Adicionar novos livros** com informações completas (título, descrição, preço, capa)
- **Editar livros existentes** com formulário pré-preenchido
- **Excluir livros** com confirmação visual
- **Interface moderna** com design responsivo e animações suaves

### 🎨 **Interface do Usuário**
- **Design responsivo** que se adapta a diferentes tamanhos de tela
- **Layout em grid** com cards elegantes para exibição dos livros
- **Animações e transições** suaves para melhor experiência do usuário
- **Gradientes e sombras** para um visual moderno e profissional
- **Hover effects** nos cards e botões

### 🔧 **Tecnologias Utilizadas**

#### Frontend
- **React 19.1.0** - Biblioteca JavaScript para construção de interfaces
- **React Router DOM 7.7.0** - Roteamento para aplicação SPA
- **Axios 1.10.0** - Cliente HTTP para comunicação com API
- **CSS3** - Estilização moderna com gradientes e animações

#### Backend
- **Node.js** - Runtime JavaScript
- **Express 5.1.0** - Framework web para Node.js
- **MySQL 2.18.1** - Sistema de gerenciamento de banco de dados
- **CORS 2.8.5** - Middleware para permitir requisições cross-origin
- **Nodemon 3.1.10** - Reinicialização automática do servidor

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 14 ou superior)
- MySQL instalado e configurado
- Git

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/books-management.git
cd books-management
```

### 2. Configure o banco de dados
```sql
CREATE DATABASE books;
USE books;

CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2),
    cover VARCHAR(500)
);
```

### 3. Configure o backend
```bash
cd backend
npm install
```

Edite o arquivo `backend/index.js` e configure as credenciais do MySQL:
```javascript
const db = mysql.createConnection({
    host: "localhost",
    user: "seu_usuario",
    password: "sua_senha",
    database: "books"
});
```

### 4. Inicie o servidor backend
```bash
npm start
```
O servidor estará rodando em `http://localhost:3000`

### 5. Configure o frontend
```bash
cd ../client
npm install
```

### 6. Inicie o servidor frontend
```bash
npm start
```
A aplicação estará disponível em `http://localhost:3001`

## 📁 Estrutura do Projeto

```
books/
├── backend/
│   ├── index.js          # Servidor Express e rotas da API
│   └── package.json      # Dependências do backend
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Books.jsx    # Página principal - listagem de livros
│   │   │   ├── Add.jsx      # Página para adicionar livros
│   │   │   └── Update.jsx   # Página para editar livros
│   │   ├── App.js           # Componente principal e rotas
│   │   └── style.css        # Estilos CSS da aplicação
│   └── package.json         # Dependências do frontend
└── README.md
```

## 🔌 API Endpoints

### GET `/books`
- **Descrição**: Retorna todos os livros
- **Resposta**: Array de objetos com informações dos livros

### GET `/books/:id`
- **Descrição**: Retorna um livro específico
- **Parâmetros**: `id` - ID do livro
- **Resposta**: Objeto com informações do livro

### POST `/books`
- **Descrição**: Cria um novo livro
- **Body**: `{ title, description, price, cover }`
- **Resposta**: Mensagem de confirmação

### PUT `/books/:id`
- **Descrição**: Atualiza um livro existente
- **Parâmetros**: `id` - ID do livro
- **Body**: `{ title, description, price, cover }`
- **Resposta**: Mensagem de confirmação

### DELETE `/books/:id`
- **Descrição**: Remove um livro
- **Parâmetros**: `id` - ID do livro
- **Resposta**: Mensagem de confirmação

## 🎯 Funcionalidades Detalhadas

### Página Principal (Books)
- **Layout em grid responsivo** com cards para cada livro
- **Imagens de capa** com placeholder gradiente quando não disponível
- **Informações organizadas**: título, descrição e preço
- **Botões de ação**: Update e Delete para cada livro
- **Botão "Add New Book"** para adicionar novos livros
- **Efeitos hover** nos cards e botões

### Página de Adicionar (Add)
- **Formulário completo** com todos os campos necessários
- **Validação de entrada** para campos obrigatórios
- **Design consistente** com o resto da aplicação
- **Navegação automática** para a página principal após adicionar

### Página de Editar (Update)
- **Formulário pré-preenchido** com dados do livro selecionado
- **Carregamento automático** dos dados do livro
- **Atualização em tempo real** dos campos
- **Navegação automática** para a página principal após editar

## 🛠️ Tecnologias e Bibliotecas

### Frontend
- **React**: Interface de usuário declarativa
- **React Router**: Navegação entre páginas
- **Axios**: Requisições HTTP para API
- **CSS3**: Estilização moderna com flexbox e grid

### Backend
- **Express**: Framework web para Node.js
- **MySQL**: Banco de dados relacional
- **CORS**: Middleware para requisições cross-origin
- **Nodemon**: Desenvolvimento com reinicialização automática

## 🎨 Características do Design

- **Layout responsivo** que funciona em desktop, tablet e mobile
- **Cards modernos** com sombras e bordas arredondadas
- **Gradientes coloridos** para fundo e elementos interativos
- **Animações suaves** em hover e transições
- **Tipografia clara** com hierarquia visual bem definida
- **Cores harmoniosas** com paleta consistente

## 🔧 Scripts Disponíveis

### Backend
```bash
npm start    # Inicia o servidor com nodemon
```

### Frontend
```bash
npm start    # Inicia o servidor de desenvolvimento
npm build    # Cria build de produção
npm test     # Executa testes
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença ISC. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

Seu Nome - [seu-email@exemplo.com](mailto:seu-email@exemplo.com)

Link do projeto: [https://github.com/seu-usuario/books-management](https://github.com/seu-usuario/books-management)

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório! 