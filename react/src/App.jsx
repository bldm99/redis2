import React, { useState, useEffect } from 'react';
import CSVReader from 'react-csv-reader';
import "./App.css"
import * as Data from "./Data";


import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Legend, Tooltip } from 'recharts';


function App() {

  const [datos, setDatos] = useState(Data.default);

  const [rat, setRat] = useState([])

  const [pelicula , setPelicula] = useState([])

  useEffect(() => {
    const obtenerdata = async () => {
      try {
        await Data.getPeliculas(setPelicula)
        await Data.Ratings(setRat)
        
      } catch (error) {
        console.log(error)
      }
    }
    obtenerdata()

  }, []);

  //console.log(rat)
  console.log(pelicula)





  const handleCSVUpload = (data) => {
    // El parámetro 'data' contendrá los datos del archivo CSV en formato de matriz
    console.log('Datos cargados desde CSV:', data);
    //console.log('Primeros 10 datos cargados desde CSV:', data.slice(0, 10));
    //const yu = data.slice(0, 10)
    setDatos(data);
  };

  const registrarDatos = async () => {
    try {
      await Data.postRiesgos(datos);
      console.log("Datos registrados correctamente");
      await Data.getListarCoseno()
      console.log("registro correcto")
    } catch (error) {
      console.error("Error al registrar datos:", error);
    }
  };

  const registrarDatosx = async () => {
    try {

      await Data.getListarCoseno()
      await Data.Ratings(setRat)
      console.log("registro correcto")
    } catch (error) {
      console.error("Error al registrar datos:", error);
    }
  };




  const valoresCoseno = rat.map(item => item.distancia);
  const sumaValores = valoresCoseno.reduce((total, valor) => total + valor, 0);

  console.log('Suma de todos los valores:', sumaValores);




  const porc = ({ payload, x, y, width, height, value }) => {
    const xy = (value.toFixed(1) * 100) / sumaValores; // Cambiado a toFixed(1)
    const percentage = `${xy.toFixed(1)}%`; // Ajustado a un solo decimal
    return (
      <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>
        {percentage}
      </text>
    );
  };



  return (
    <>
      <div>

        <div className='cargar'>
          <h1>hola</h1>
          <div>
            <img src="https://logowik.com/content/uploads/images/csv-file-format8052.jpg" alt="CSV File Format" width={50} />
          </div>
          <CSVReader
            onFileLoaded={handleCSVUpload}
            parserOptions={{ header: true, skipEmptyLines: true }}
          />
        </div>


        <div className='btns'>
          <button onClick={registrarDatos}>Registrar datos de csv</button>
          <button onClick={registrarDatosx}>Generar resultados</button>
        </div>

        <div>
          <div>Peliculas recomendadas</div>
          <div>
            <div>
              
            </div>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Id Vecino</th>
              <th>Distancia</th>
            </tr>
          </thead>
          <tbody>
            {rat.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.id_vecino}</td>
                <td>{item.distancia}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/*<div className='grafico'>
          <ResponsiveContainer width="80%" aspect={2} >
            <BarChart
              data={rat}
              width={500}
              height={300}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="4 1 2" />
              <XAxis dataKey="id_vecino" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="distancia" fill="orange"

                label={porc}

              >


              </Bar>



            </BarChart>
          </ResponsiveContainer>
            </div>*/}



      </div>
    </>
  );
}

export default App;
