using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using Newtonsoft.Json;
using System.Threading.Tasks;
using System.Collections.Generic;
using Api.Models;
using Api.Data;
using Microsoft.AspNetCore.Cors;
using Models;

namespace Api.Controllers
{
    [ApiController]
    [Route("data")]
    public class VecinoController : ControllerBase
    {
        private readonly HttpClient _httpClient;
        private readonly VeciDbContext _dbContext;

        public VecinoController(IHttpClientFactory httpClientFactory, VeciDbContext dbContext)
        {
            _httpClient = httpClientFactory.CreateClient();
            _dbContext = dbContext;
        }

        [HttpGet]
        [Route("registervecino")]
        public async Task<IActionResult> Listar2()
        {
            var apiUrl = "http://ip172-18-0-88-clch2nogftqg00cp27cg-5000.direct.labs.play-with-docker.com/api/valor";
            try
            {
                var response = await _httpClient.GetAsync(apiUrl);

                if (response.IsSuccessStatusCode)
                {
                    var content = await response.Content.ReadAsStringAsync();

                    // Deserializa directamente como un diccionario
                    var artistRatings = JsonConvert.DeserializeObject<Dictionary<string, double>>(content);

                    // Convierte el diccionario a una lista de objetos Vecinoget
                    var dataList = artistRatings.Select(artistRating => new Vecinoget
                    {
                        //Id_vecino y Distancia deben ser atributos de Vecinoget
                        Id_vecino = artistRating.Key,
                        Distancia = artistRating.Value
                    }).ToList();

                    // Convierte la lista de Vecinoget a una lista de Vecino
                    var vecinoList = dataList.Select(coseno => new Vecino
                    {
                        Id_vecino = coseno.Id_vecino,
                        Distancia= coseno.Distancia
                    }).ToList();

                    // Guarda los datos en la base de datos de Vecinos
                    _dbContext.Vecinos.AddRange(vecinoList);
                    await _dbContext.SaveChangesAsync();

                    // Devuelve los datos como un objeto JSON
                    return Ok(dataList);
                }
                else
                {
                    return StatusCode((int)response.StatusCode, "Error al obtener datos de la API externa.");
                }
            }
            catch (HttpRequestException)
            {
                return StatusCode(500, "Error al conectar con la API externa.");
            }
        }

    }
}
