# Demo Repository

This repository lists the projects that I created to demonstrate the following development skills:

**Node.js, TypeScript, NestJS framework, PostgreSQL, TypeORM (Migrations, Transactions).**

## Projects Overview

### [`nestjs-typeorm`](./nestjs-typeorm)
- **NestJS**, **TypeORM**
- **Nest CLI** usage for project scaffolding and structure.
- **CRUD modules** for `users` and `posts`.
- **Docker integration** with `Dockerfile` and `docker-compose`.
- **Environment configuration** using `.env` files and `@nestjs/config` service.
- **Testing** with fixed **unit tests** and **E2E tests**.
- **Database migrations** with TypeORM.
- **TypeORM transactions** implemented in `users` and `posts` services.

📌 **Note:** A detailed [`README.md`](./nestjs-typeorm) file is included inside the `nestjs-typeorm` folder with installation and launch instructions.

### [`nestjsx-crud`](./nestjsx-crud)

This project demonstrates the same `users` and `posts` modules using the unofficial [`@nestjsx/crud`](https://github.com/nestjsx/crud) (now [`@dataui/crud`](https://github.com/gid-oss/dataui-nestjs-crud) ) library.

It showcases the ability to rapidly build a similar project using an alternative approach.

<img width="300px" src="https://raw.githubusercontent.com/nestjsx/crud/master/img/crud-usage2.png" alt="CRUD usage" />

---
Feel free to explore each folder for more details!
