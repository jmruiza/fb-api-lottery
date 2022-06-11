# Firebase API Lottery

Firebase Cloud Function's demo

## TODO's 

- [x] Terminar test para los metodos
    - [x] POST /user
    - [x] GET /users
    - [x] GET /user/:userId
    - [x] PUT /user/:userId
    - [x] DELETE /user/:userId

- [] Desacoplar helpers para pruebas (```test/helpers.js``` o ```test/helpers/*```) 
- [] Cerrar conexión a la BD en el ```afterAll()``` de ```index.spec.js```
- [] Refactoring para usar graphql