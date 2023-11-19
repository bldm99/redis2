using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using Newtonsoft.Json;
using System.Threading.Tasks;
using System.Collections.Generic;
using Api.Models;
using Microsoft.AspNetCore.Cors;

namespace Api.Controllers
{
    [ApiController]
    [Route("data")]

    public class PeliculaController : ControllerBase
    {
        private readonly HttpClient _httpClient;

        public PeliculaController(IHttpClientFactory httpClientFactory)
        {
            _httpClient = httpClientFactory.CreateClient();
        }

        [HttpGet]
        [Route("recomendacion")]

        public async Task<IActionResult> Listarx()
        {
            var apiUrl = "https://teamapi.bladimirchipana.repl.co/pruebas";
            try
            {
                // Realiza una solicitud GET a la API externa
                var response = await _httpClient.GetAsync(apiUrl);

                if (response.IsSuccessStatusCode)
                {
                    // Lee el contenido de la respuesta
                    var content = await response.Content.ReadAsStringAsync();

                    // Deserializa la respuesta JSON en un diccionario
                    var data = JsonConvert.DeserializeObject<Dictionary<string, string>>(content);

                    // Convierte el diccionario en una lista de objetos Peliculaget
                    var peliculas = new List<Peliculaget>();
                    foreach (var kvp in data)
                    {
                        peliculas.Add(new Peliculaget
                        {
                            Id_movie = kvp.Value,
                            imagen = "https://media.tycsports.com/files/2022/06/09/438679/netflix_862x485.webp"
                        });
                    }

                    // Devuelve la lista de películas como resultado
                    return Ok(peliculas);
                }
                else
                {
                    return StatusCode((int)response.StatusCode, "Error al obtener datos de la API externa.");
                }
            }
            catch (HttpRequestException)
            {
                // Maneja las excepciones de solicitud HTTP, por ejemplo, si no se puede conectar a la API externa
                return StatusCode(500, "Error al conectar con la API externa.");
            }
        }
    }
}
