<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>


# 🚀 Curso NestJS - ChatGPT

Este projeto faz parte do **Curso NestJS - ChatGPT**, onde estamos aprendendo NestJS do básico ao avançado, implementando funcionalidades essenciais como autenticação, proteção de rotas e interação com banco de dados.

---

## 📌 **🔹 Tecnologias Utilizadas**

- **Node.js** - Plataforma para execução do código JavaScript no backend.
- **NestJS** - Framework Node.js baseado em TypeScript.
- **TypeScript** - Superset do JavaScript para tipagem estática.
- **Prisma ORM** - ORM moderno para interação com o banco de dados PostgreSQL.
- **PostgreSQL** - Banco de dados relacional utilizado no projeto.
- **JWT (JSON Web Token)** - Utilizado para autenticação segura de usuários.
- **Bcrypt.js** - Biblioteca para hash e comparação de senhas.
- **Passport.js** - Middleware de autenticação para suporte a estratégias JWT.

---

## 📌 **🔹 Funcionalidades Implementadas**

### ✅ **Módulo 1: Configuração Inicial**
- Configuração do ambiente de desenvolvimento com NestJS.
- Estruturação do projeto.
- Primeiro endpoint com NestJS.

### ✅ **Módulo 2: Criando um CRUD Completo**
- Implementação de um CRUD para gerenciar **produtos**.
- Uso do **DTO (Data Transfer Object)** para validação de dados.
- Testes das rotas usando **Postman** e **Insomnia**.

### ✅ **Módulo 3: Integração com Banco de Dados (PostgreSQL + Prisma)**
- Configuração do banco de dados PostgreSQL usando Prisma ORM.
- Definição do **modelo de Produto** (`Product`) no Prisma.
- Criação do `PrismaService` para gerenciar a conexão com o banco.
- Substituição do armazenamento em memória pelo PostgreSQL.

### ✅ **Módulo 4: Melhorando a Arquitetura (SOLID + Repositórios)**
- Aplicação dos princípios **SOLID** na arquitetura do projeto.
- Separação da lógica do Prisma em **Repositórios** para maior organização.
- Implementação de **injeção de dependências** para desacoplar o código.

### ✅ **Módulo 5: Autenticação com JWT**
- Implementação de **registro e login de usuários**.
- Criação da tabela **User** no banco de dados.
- Uso de **Bcrypt.js** para criptografar senhas.
- Geração de **tokens JWT** para autenticação.

### ✅ **Módulo 6: Protegendo Rotas com Guards**
- Implementação do **AuthGuard** para proteger rotas contra acessos não autorizados.
- Aplicação do `AuthGuard` em rotas privadas.
- Uso do **JwtService** para validar tokens JWT.
- Testes de autenticação no **Insomnia/Postman**.

---

## 📌 **🔹 Como Rodar o Projeto?**

### 🔹 **Pré-requisitos**
Antes de começar, você precisa ter instalado:
- **[Node.js](https://nodejs.org/)**
- **[PostgreSQL](https://www.postgresql.org/)**
- **[Docker](https://www.docker.com/) (opcional)**

### 🔹 **1️⃣ Clone o Repositório**
```bash
git clone https://github.com/lemartins07/curso-nestjs-chatgpt.git
cd curso-nestjs-chatgpt
```

### 🔹 **2️⃣ Instale as Dependências**
```bash
npm install
```

### 🔹 **3️⃣ Configure as Variáveis de Ambiente**
Crie um arquivo **`.env`** e defina a chave secreta do JWT e a conexão com o banco de dados:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/nestjs_db"
JWT_SECRET="minha_chave_super_secreta"
JWT_EXPIRES_IN="1h"
```

### 🔹 **4️⃣ Execute as Migrations do Prisma**
```bash
npx prisma migrate dev --name init
```

### 🔹 **5️⃣ Inicie o Servidor**
```bash
npm run start
```

---

## 📌 **🔹 Como Testar a API?**

### 🔹 **Registrar um Novo Usuário**
```bash
curl -X POST http://localhost:3000/auth/register -H "Content-Type: application/json" -d '{"email": "user@email.com", "password": "123456"}'
```

### 🔹 **Fazer Login e Obter Token JWT**
```bash
curl -X POST http://localhost:3000/auth/login -H "Content-Type: application/json" -d '{"email": "user@email.com", "password": "123456"}'
```
**Resposta esperada:**
```json
{
  "access_token": "SEU_TOKEN_AQUI"
}
```

### 🔹 **Acessar uma Rota Protegida**
```bash
curl -X GET http://localhost:3000/products -H "Authorization: Bearer SEU_TOKEN_AQUI"
```

---

## 📌 **🔹 Próximos Passos do Curso**
Agora que já implementamos a base do nosso projeto, vamos avançar para funcionalidades mais avançadas:

### **🚀 Módulo 7: Documentação com Swagger**
✅ Adicionar **Swagger** para documentar a API.  
✅ Gerar documentação automática dos endpoints.  

### **🚀 Módulo 8: Upload de Arquivos (Imagens e PDFs)**
✅ Implementação do **multer** para upload de arquivos.  
✅ Armazenamento no **AWS S3** ou em uma pasta local.  

### **🚀 Módulo 9: Testes Automatizados**
✅ Criar testes **unitários** e **de integração**.  
✅ Usar **Jest** para testar o **AuthService** e **ProductsService**.  

### **🚀 Módulo 10: Deployment**
✅ Configurar um ambiente de **produção** com **Docker**.  
✅ Deploy da API no **Render/Vercel/Fly.io**.  
✅ Configuração de **banco de dados em produção**.  

---

## 📌 **🔹 Contribuindo**
Se você deseja contribuir com melhorias, siga estes passos:
1. Faça um **fork** do repositório.
2. Crie uma **branch** com sua feature:  
   ```bash
   git checkout -b minha-feature
   ```
3. Faça o **commit** das alterações:  
   ```bash
   git commit -m "Adicionando nova funcionalidade"
   ```
4. Envie para o repositório remoto:  
   ```bash
   git push origin minha-feature
   ```
5. Abra um **Pull Request**.

---

## 📌 **🔹 Contato**
👨‍💻 **Criado por:** [lemartins07](https://github.com/lemartins07)  
📧 **E-mail:** lemartins07dev@gmail.com  
📌 **Projeto disponível em:** [GitHub](https://github.com/lemartins07/curso-nestjs-chatgpt)

🚀 **Bons estudos e vamos dominar o NestJS!** 🚀
