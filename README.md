⚽ San Lorenzo - Sistema de Gestión de Eventos y Socios ⚽

#API REST desarrollada con Node.js y Express para la administración de eventos, venta de entradas y gestión de socios del Club Atlético San Lorenzo de Almagro, estructurada bajo una arquitectura en capas.

🔵🔴 TEMATICA
Plataforma oficial para la reserva de populares/plateas en el Estadio Pedro Bidegain (El Nuevo Gasómetro), compra de accesos para eventos en el Polideportivo Roberto Pando y actividades de la Sede Avenida La Plata.

- Tecnologías Utilizadas
- **Node.js**
- **Express.js**
- **dotenv**
- **nodemon**

- Instalación

1. Clonar el repositorio.
2. Ejecutar `npm install` para instalar dependencias.
3. Crear un archivo `.env` tomando como base `.env.example`.

- Variables de Entorno

- PORT: Puerto de ejecución (Ej: 8080).
- NODE_ENV: Entorno de desarrollo (development).
- MONGO_URL: Cadena de conexión a MongoDB.
- JWT_SECRET: Clave secreta para firma de tokens.

- Ejecucion
bash
npm run dev
```bash
npm run dev
