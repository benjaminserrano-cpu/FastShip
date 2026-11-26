# FastShip - Backend de gestión de envíos

## 1. Descripción del proyecto

FastShip es un backend desarrollado con Node.js, Express y MongoDB para gestionar los envíos de paquetes.

El sistema permite registrar envíos, consultar los envíos activos, buscar un envío por su ID, actualizar su estado y eliminar registros.

## 2. Tecnologías utilizadas

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- Postman
- Visual Studio Code

## 3. Estructura del proyecto

```text
FastShip/
│
├── config/
│   └── database.js
│
├── controllers/
│   └── enviosController.js
│
├── models/
│   └── Envio.js
│
├── routes/
│   └── envios.js
│
├── node_modules/
│
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## 4. Configuración e instalación

1. Abrir la carpeta FastShip en Visual Studio Code.
2. Abrir la terminal.
3. Ejecutar el siguiente comando para instalar las dependencias:

```bash
npm install
```

4. Configurar la cadena de conexión de MongoDB Atlas en el archivo `config/database.js`.

## 5. Ejecución del servidor

Para iniciar el backend, ejecutar el siguiente comando:

```bash
node server.js
```

El servidor se ejecuta en el puerto 3000.

Dirección local:

```text
http://localhost:3000
```

## 6. Funcionalidades de la API

| Método HTTP | Ruta | Descripción |
|---|---|---|
| POST | /api/envios | Registrar un nuevo envío |
| GET | /api/envios/activos | Consultar envíos activos |
| GET | /api/envios/:id | Buscar envío por ID |
| PUT | /api/envios/:id | Actualizar el estado del envío |
| DELETE | /api/envios/:id | Eliminar un envío |

## 7. Datos para registrar un envío

Los datos se envían mediante Postman en formato JSON.

Ejemplo:

```json
{
    "idPedido": "FS001",
    "remitente": "Benjamin",
    "destinatario": "Carlos",
    "direccionEntrega": "Av. Lima 123",
    "estado": "pendiente"
}
```

Los estados permitidos para los envíos son:

- pendiente
- en tránsito
- entregado

## 8. Base de datos

Se utilizó MongoDB Atlas para almacenar la información de los envíos.

La conexión se realiza mediante Mongoose desde el archivo `config/database.js`.

La colección utilizada es `envios`.

## 9. Pruebas realizadas

Se utilizó Postman para comprobar el funcionamiento de las operaciones de la API:

- Registro de un envío.
- Actualización del estado.
- Consulta de envíos activos.
- Búsqueda de un envío por ID.
- Eliminación de un envío.

Las pruebas realizadas permitieron comprobar el funcionamiento de las operaciones implementadas.

## 10. Conclusión

El desarrollo del backend FastShip permitió aplicar los conocimientos de Express y MongoDB, organizando el proyecto mediante modelos, rutas y controladores para gestionar los envíos.