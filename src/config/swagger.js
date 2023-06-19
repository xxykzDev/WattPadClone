const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Opciones de configuración para Swagger
const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Documentación de la API de tu aplicación',
    },
  },
  apis: ['src/routes/*.js'], // Ruta a los archivos de rutas de tu aplicación
};

// Genera la especificación Swagger
const swaggerSpec = swaggerJsdoc(options);

module.exports = (app) => {
  // Configura la ruta para la documentación Swagger
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};