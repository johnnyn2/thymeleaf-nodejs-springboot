# thymeleaf-nodejs-springboot
This is a sample project that demonstrate how to embed nodejs webapp into spring boot application. Spring boot is an old web framework that doesn't provide much support to frontend frameworks but it only supports some template engines, such as Freemarker and Thymeleaf. These template engines are not enough to create maintainable javascript codebase for user-engaging interactive experience. Thus, this project demostrate how to use webpack and babel to transpile react application and node modules into static resources and inject to html templates. So the html view can be resolved by Thymeleaf template engine to interactive user-interface to spring boot application

## Installation

### Frontend development
1. Install node modules. <code>npm install</code>
2. <code>npm run dev</code>
### Backend development
1. Start project as spring boot application. <code>./mvnw spring-boot:run</code>

## Deployment
### Frontend
1. Compile js,css and assets and html to /src/main/resources/static folder and /src/main/resources/template folder respectively. <code>npm run build</code>
### Backend
1. Build .war deployment. <code>./mvnw clean install</code>
