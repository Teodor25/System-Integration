const express = require('express');
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Assssssignment",
      version: "0.0.1",
      description: ` 5th assignment`,
    },
  },
  apis: ["./node.js"],
};

const openapiSpecification = swaggerJSDoc(swaggerOptions);

app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));

/**
 * @openapi
 * /timestamp:
 *   get:
 *     description: get timestamp from node server
 *     summary: read timestamp
 *     responses:
 *       200:
 *         description: The contents of the timestamp from node.
 */
app.get('/timestamp', function (req, res) {
    res.send(JSON.stringify(new Date().toISOString()));
});

/**
 * @openapi
 * /return:
 *   get:
 *     description: get timestamp from python server
 *     summary: read timestamp
 *     responses:
 *       200:
 *         description: The contents of the timestamp from python.
 */
app.get('/return', async function (req, res) {
    res.send(await (await fetch('http://127.0.0.1:8000/timestamp')).json());
});

// https://f857-94-18-243-162.eu.ngrok.io/timestamp
/**
 * @openapi
 * /return:
 *   get:
 *     description: get timestamp from other server
 *     summary: read timestamp
 *     responses:
 *       200:
 *         description: The contents of the timestamp from python.
 */
 app.get('/external-server', async function (req, res) {
  res.send(await (await fetch('https://f857-94-18-243-162.eu.ngrok.io/timestamp')).json());
});

app.listen(6969);