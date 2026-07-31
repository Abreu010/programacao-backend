# Programação Back-End
Atividades e exercícios da UC de Programação Back-End  
**Curso tecnico:** Escola SENAI "Santo Paschoal Crepaldi" — Presidente Prudente / SP  
**Aluno:** João Lucas de Abreu  
**Turma:** 1-2026-SESI_DEV_OC_1  

---

## Tecnologias estudadas
- Node.js
- npm

## Atividades
| # | Atividade | Tema |
| --- | ----------------------------------- | ---------------------------------- |
| 01 | [Ambiente Node](./01-ambiente-node) | Módulos, objetos e primeiro script |

---

## 📚 Projeto do Semestre — API de Gestão de Livraria

Desenvolvimento de uma **API RESTful** para o gerenciamento completo de uma livraria, realizada em grupo para simular o ambiente de desenvolvimento de software do mercado de trabalho.

---

### 📌 Visão Geral
O objetivo do sistema é centralizar as operações do acervo, controle de estoque, gestão de autores e clientes, além de registrar vendas ou empréstimos de livros. A API serve como a camada lógica de back-end pronta para ser consumida por aplicações web ou mobile.

---

### ⚙️ Funcionalidades Principais (Endpoints)

#### 📖 Livros
* `POST /livros` — Cadastrar novo livro (Título, ISBN, Preço, Qtd. Estoque, Autor, Categoria)
* `GET /livros` — Listar todos os livros (com suporte a filtros e paginação)
* `GET /livros/:id` — Buscar detalhes de um livro específico
* `PUT /livros/:id` — Atualizar informações ou estoque
* `DELETE /livros/:id` — Remover um livro do sistema

#### ✍️ Autores e Categorias
* `POST /autores` — Cadastrar novo autor
* `GET /autores` — Listar autores e seus respectivos livros
* `POST /categorias` — Cadastrar nova categoria/gênero literário

#### 👤 Usuários e Autenticação
* `POST /auth/register` — Cadastro de clientes e administradores
* `POST /auth/login` — Autenticação de usuário com geração de token **JWT**
* `GET /perfil` — Rota protegida com os dados do usuário logado

#### 🛒 Vendas / Empréstimos
* `POST /pedidos` — Registrar compra de um ou mais livros (com baixa automática no estoque)
* `GET /pedidos` — Histórico de vendas/pedidos

---

### 🛠️ Tecnologias e Bibliotecas Previstas

* **Runtime:** Node.js
* **Gerenciador de Pacotes:** npm
* **Framework Web:** Express.js
* **Autenticação:** JSON Web Token (`jsonwebtoken`) e criptografia de senhas (`bcryptjs`)
* **Validação de Dados:** Zod / Yup / Express-Validator
* **Banco de Dados:** SQLite / MySQL / PostgreSQL
* **ORM/Query Builder:** Prisma ORM ou Sequelize
* **Testes / Testes de API:** Postman / Insomnia / Thunder Client

---

### 📂 Arquitetura do Projeto (Padrão MVC / Camadas)

```text
src/
├── controllers/    # Camada de controle (recebe requisição e envia resposta)
├── models/         # Definição e manipulação dos dados / banco
├── routes/         # Mapeamento de rotas e endpoints
├── middlewares/    # Validações, tratamento de erros e verificação JWT
├── database/       # Configuração e conexão com o banco de dados
└── server.js       # Ponto de entrada da aplicação Node.js