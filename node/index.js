// Archivo: index.js

const express = require("express");
const sequelize = require("./util/database");
const User = require("./Models/user"); // Asegúrate de que la ruta sea correcta

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    // Consulta para obtener todos los usuarios
    const users = await User.findAll();
    console.log(users)

    // Renderiza los resultados en una tabla HTML
    const tableHtml = `
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Valor_Coseno</th>
            <!-- Agrega más columnas según tu tabla -->
          </tr>
        </thead>
        <tbody>
          ${users.map(user => `
            <tr>
              <td>${user.nombre}</td>
              <td>${user.valor_coseno}</td>
              <!-- Agrega más celdas según tu tabla -->
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;

    res.send(tableHtml);
  } catch (error) {
    console.error('Error al obtener usuarios', error);
    res.status(500).send('Error al obtener usuarios');
  }
});

app.listen(port, async () => {
  // Sincroniza los modelos con la base de datos antes de iniciar el servidor
  await sequelize.sync();
  console.log(`Aplicación Node.js escuchando en http://localhost:${port}`);
});
