import React, { useState, useEffect } from 'react';
import CSVReader from 'react-csv-reader';
import "./App.css"
import * as Data from "./Data";


import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Legend, Tooltip } from 'recharts';


function App() {

  const [datos, setDatos] = useState(Data.default);

  const [rat, setRat] = useState([])

  const [pelicula, setPelicula] = useState([])

  const [usuario, setUsuario] = useState(0)

  const [inicio, setInicio] = useState("0")

  /*useEffect(() => {
    const obtenerdata = async () => {
      try {

        await Data.Ratings(setRat)

      } catch (error) {
        console.log(error)
      }
    }
    obtenerdata()

  }, []);*/

  //console.log(rat)
  //console.log(pelicula)


  const handleInputChange = (event) => {
    setUsuario(event.target.value);
  };




  const handleCSVUpload = (data) => {
    // El parámetro 'data' contendrá los datos del archivo CSV en formato de matriz
    console.log('Datos cargados desde CSV:', data);
    //console.log('Primeros 10 datos cargados desde CSV:', data.slice(0, 10));
    //const yu = data.slice(0, 10)
    setDatos(data);
  };

  const registrarCsv = async () => {
    try {
      await Data.postCsv(datos);
      console.log("Datos registrados correctamente");
    } catch (error) {
      console.error("Error al registrar datos:", error);
    }
  };

  const registrarDatos = async () => {
    try {
      const inicio = new Date();

      await Data.postRiesgos(/*datos ,*/ usuario);
      /*await Data.postRiesgosdos(usuario);
      await Data.postRiesgostres( usuario);
      await Data.postRiesgoscuatro( usuario);
      await Data.postRiesgoscinco(usuario);*/

      const fin = new Date();
      const tiempoDeEjecucion = fin - inicio;

      console.log(`Datos registrados correctamente de api1. Tiempo de ejecución: ${tiempoDeEjecucion} milisegundos`);
    } catch (error) {
      console.error("Error al registrar datos:", error);
    }
  };

  const registrarDatosdos = async () => {
    try {
      await Data.postRiesgosdos(/*datos ,*/ usuario);
      console.log("Datos registrados correctamente de api2");
    } catch (error) {
      console.error("Error al registrar datos:", error);
    }
  };
  const registrarDatostres = async () => {
    try {
      await Data.postRiesgostres(/*datos ,*/ usuario);
      console.log("Datos registrados correctamente de api3");
    } catch (error) {
      console.error("Error al registrar datos:", error);
    }
  };
  const registrarDatoscuatro = async () => {
    try {
      await Data.postRiesgoscuatro(/*datos ,*/ usuario);
      console.log("Datos registrados correctamente de api4");
    } catch (error) {
      console.error("Error al registrar datos:", error);
    }
  };
  const registrarDatoscinco = async () => {
    try {
      await Data.postRiesgoscinco(/*datos ,*/ usuario);
      console.log("Datos registrados correctamente de api5");
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

  //console.log('Suma de todos los valores:', sumaValores);




  const porc = ({ payload, x, y, width, height, value }) => {
    const xy = (value.toFixed(1) * 100) / sumaValores; // Cambiado a toFixed(1)
    const percentage = `${xy.toFixed(1)}%`; // Ajustado a un solo decimal
    return (
      <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>
        {percentage}
      </text>
    );
  };

  const Recomend = async () => {
    try {
      await Data.getPeliculas(setPelicula)
    } catch (error) {
      console.log(error)
    }
  }

  const handleCambioInicio = () => {
    setInicio("1");
  };





  const handleClickBoton1 = () => {
    console.log('Soy el botón 1');
  };

  const handleClickBoton2 = () => {
    console.log('Soy el botón 2');
  };

  const handleClickBoton3 = () => {
    console.log('Soy el botón 3');
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
        <div>
          <button onClick={registrarCsv}>Cargar csv</button>
        </div>


        <div className='btns'>
          <button onClick={registrarDatos}>Analizar datos de csv</button>
          <button onClick={() => { registrarDatos(); registrarDatosdos(); registrarDatostres(); registrarDatoscuatro(); registrarDatoscinco(); }}>Api1 , Api2 ,Api3, Api4, Api5</button>
          <button onClick={() => { registrarDatos(); }}>Api1</button>
          <button onClick={() => { registrarDatosdos() }}>Api2</button>
          <button onClick={() => { registrarDatostres() }}>Api3</button>
          <button onClick={() => { registrarDatoscuatro() }}>Api4</button>
          <button onClick={() => { registrarDatoscinco() }}>Api5</button>
          <button onClick={registrarDatosx}>Generar resultados</button>
          <div>
            <p>Inicio: {inicio}</p>
            <button onClick={handleCambioInicio}>Cambiar a 1</button>
          </div>

          <div>
            <label htmlFor="usuarioInput">Usuario:</label>
            <input
              type="text"
              id="usuarioInput"
              value={usuario}
              onChange={handleInputChange}
            />
            <p>El valor del usuario es: {usuario}</p>
          </div>
        </div>

        <div className='valores'>
          <div className='table-vecinos'>
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
          </div>

          <div className='cont-recomend' >
            <div className='title'>
              Peliculas recomendadas
              <button onClick={Recomend}  >Ver</button>
            </div>
            <div className='box-peli'>
              <div className='imagenes'>
                {
                  pelicula.map(pe => (
                    <div className='netflix'>
                      <img src={pe.imagen} alt="" />
                      <p>Pelicula:{pe.id_movie}</p>
                    </div>

                  ))
                }

              </div>
            </div>
          </div>


        </div>




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
