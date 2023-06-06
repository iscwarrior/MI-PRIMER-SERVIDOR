const http = require("http");

// Declarando el servidor

/**
 * Endpoint ->
 * conformado por 2 cosas
 * method -> [GET, PATCH, etc...]
 * ruta -> /, /kodemia, /posts
 */
const server = http.createServer((request, response) => {
    // Leer la request
    const { url, method } = request;
    const endpoints = {
        GET: {
          "/hola": "Mensaje totalmente diferente de los demas",
          "/adios": "Mensaje totalmente diferente de los demas con ADIOS",
        },
        POST: {
          "/hola": "Rita de post"
        },
        PATCH: {
          "/hola": "Ruta de patch en holaaaa"
        },
        DELETE: {
          "/adios": "Ruta adioooos delete"
        }
    };

    /**
     * -> endpoints[method] ->  endpoints[GET]
     */
    response.write(endpoints[method][url]);
    // Responder
    response.end();
});

// Prender nuestro servidor
server.listen(8080, () => {
    console.log("Nuestro servidor esta prendido!!!");
});

/**
 * Tarea 1: terminar todos los metodos con la ruta /hola y con la ruta /adios
 * 10 -> ifs
 * Tarea 2: optimizar los ifs con estructura de datos.
 * post pash delete
 */


const express = require ("express");
const server2 =  express();


server2.get("/", (request, response)=> {
    response.write("estamos en home con metodo GET");
    response.end();
}) 

server2.post("/", (request, response)=> {
    response.write("estamos en home con metodo POST");
    response.end();
}) 

server2.patch("/homePatch", (request, response)=> {
    response.write("estamos en home con metodo patch");
    response.end();
}) 


server2.delete("/", (request, response)=> {
    response.write("estamos en home con metodo delete");
    response.end();
}) 


server2.listen(8081, () => {
    console.log("Nuestro servidor  esta prendido")
})