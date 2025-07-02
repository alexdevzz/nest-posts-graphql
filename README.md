<p align="center">
  <a href="" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
  <a href="" target="blank"><img src="https://github.com/user-attachments/assets/e8ad12ee-46e0-456e-809b-db050ed33dea" width="120" alt="GraphQL Logo" /></a>
</p>

#  <p align="center"><strong>Posts Backend API</strong></p>
<p align="center">
<a href="" target="_blank"><img src="https://img.shields.io/badge/version-1.0.0-blue"  /></a>
<a href="" target="_blank"><img src="https://img.shields.io/badge/build-develop-red"  /></a>
<a href="" target="_blank"><img src="https://img.shields.io/github/license/alexdevzz/nest-posts-graphql?color=gren"  /></a>
<a href="" target="_blank"><img src="https://img.shields.io/github/created-at/alexdevzz/nest-posts-graphql"  /></a>
<a href="" target="_blank"><img src="https://img.shields.io/github/languages/top/alexdevzz/nest-posts-graphql?color=purple"  /></a>
<a href="" target="_blank"><img src="https://img.shields.io/badge/framework-NestJS-darkred"  /></a>
</p>
</br>
<p align="center">
<a href="" target="_blank"><img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white"  /></a>
<a href="" target="_blank"><img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"  /></a>
<a href="" target="_blank"><img src="https://img.shields.io/badge/TypeORM-FE0803.svg?style=for-the-badge&logo=typeorm&logoColor=white"  /></a>
<a href="" target="_blank"><img src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white"  /></a>
<a href="" target="_blank"><img src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white"  /></a>
<a href="" target="_blank"><img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"  /></a>
<a href="" target="_blank"><img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white"  /></a>
<a href="" target="_blank"><img src="https://img.shields.io/badge/prettier-%23F7B93E.svg?style=for-the-badge&logo=prettier&logoColor=black"  /></a>
</p>
 

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```





## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).

## Stay in touch

- LinkedIn - [alexdevzz](https://www.linkedin.com/in/alexdevzz/)
- Gmail - [alexdev.workenv@gmail.com](mailto:alexdev.workenv@gmail.com)
- Twitter - [@alexdevzz](https://x.com/alexdevzz)
- Telegram - [@alexdev_00](https://t.me/alexdev_00)
- Instagram - [@is.ale_00](https://www.instagram.com/is.ale_00/)

## License

This project is licensed under MIT.

---
---
---
# Ecommerce Backend API <img src="https://github.com/user-attachments/assets/85abb686-eebf-4dce-aebb-1e833ea9d0df" alt="React" width="30" height="30">
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Static Badge](https://img.shields.io/badge/build-in_deploy-red)
![GitHub License](https://img.shields.io/github/license/alexdevzz/ecommerce-backend-api?color=gren)
![GitHub Created At](https://img.shields.io/github/created-at/alexdevzz/ecommerce-backend-api)
![GitHub top language](https://img.shields.io/github/languages/top/alexdevzz/ecommerce-backend-api?color=purple)
![Framework](https://img.shields.io/badge/framework-Spring-gren)

## Description
Este proyecto es una API muy simplicada para ejemplificar el uso de GraphQL como capa de comunicación sobre el framework NestJS, utilizando ademas, SQLite como base de datos, TypeORM para el mapeo objeto-relacional, y cuenta con validación de datos mediante class-validator y DTOs (Data Transfer Objects).

## Features
- Swagger UI documentation for each of the API endpoints
- Java Development Kit 21.0.4
- Maven 3.9.9
- MySQL 8.0.4
- Manage Customers, Product's Categories, Product's Options, Products, and Orders
- Track all stages of delivery operations
- Works perfectly with any API testing software
- SOLID methodology principles for project structuring
- Spring Framework best practices through the use of DTOs (Data Transfer Object), DAOs (Data Access Object), Controllers, Entities, Mappers, Payloads, and Services
- Easy to use

## Spring Dependencies
- Spring Boot DeVTools
- Lombok
- Srping Web
- JDBC API
- Spring Data JPA
- MySQL Driver
- Validation
- CycloneDX SBOM support
- OpenAPI Springdoc

## Install
1. Before continuing with the installation process you must have JDK 21, Maven 3..9 and MySQL 8 installed on your operating system. If you do not have them, install them and update the Maven and Java environment variables.
   
2. Clone this repository:
   ```bash
   git clone https://github.com/alexdevzz/ecommerce-backend-api.git
   ```
3. Open the project in your favorite IDE
   
4. Go to ```application.yml``` and adjust the database parameters in ```datasource``` (In order to run the application without errors you must have the database previously created, even if it is empty)
 
   ![imagen](https://github.com/user-attachments/assets/ae90c13c-7846-443e-b448-c9bab1d37034)
   
6. Go to ```pom.xml``` and then, check and update maven dependencies
   
7. Then you must compile the Spring Boot application. To do this you must position yourself at the root of the project and package the application using the next command in your console:
   ``` bash
   mvnw package
   ```
   The packaged application file is stored in the new folder ```target```
   
8. We position ourselves in the newly created folder ```target``` and run the previously packaged file:
    ``` bash
    java -jar file_name.jar
    ```

8. Ready !!!

## ER Diagram
Here is the Entity-Relationship diagram generated using https://dbdiagram.io/

![Alt text](src/main/resources/bd_diagram.png)

