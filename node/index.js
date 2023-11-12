const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
});

app.get('/', (req, res) => {
  // Ejemplo de consulta
  pool.query('SELECT * FROM Users', (err, result) => {
    if (err) {
      console.error('Error al ejecutar la consulta', err);
      res.status(500).send('Error al ejecutar la consulta');
    } else {
      const rows = result.rows;
      // Renderiza los resultados en una tabla HTML
      const tableHtml = `
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Valor_Coseno</th>
              <!-- Añade más columnas según tu tabla -->
            </tr>
          </thead>
          <tbody>
            ${rows.map(row => `
              <tr>
                <td>${row.nombre}</td>
                <td>${row.valor_coseno}</td>
                <!-- Añade más celdas según tu tabla -->
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
      res.send(tableHtml);
    }
    pool.end(); // Cierra la conexión cuando hayas terminado
  });
});

app.listen(port, () => {
  console.log(`Aplicación Node.js escuchando en http://localhost:${port}`);
});
