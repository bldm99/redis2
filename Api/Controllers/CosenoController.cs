using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using Newtonsoft.Json;
using System.Threading.Tasks;
using System.Collections.Generic;
using Api.Models;
using Api.Data;
using Microsoft.AspNetCore.Cors;


namespace Api.Controllers
{
    [ApiController]
    [Route("data")]
    public class CosenoController : ControllerBase
    {
        private readonly HttpClient _httpClient;
        private readonly ApplicationDbContext _dbContext;

        public CosenoController(IHttpClientFactory httpClientFactory,  ApplicationDbContext dbContext)
        {
            _httpClient = httpClientFactory.CreateClient();
            _dbContext = dbContext;
        }

        [HttpGet]
        [Route("listarcoseno")]
        public async Task<IActionResult> Listar2()
        {
            var apiUrl = "http://ip172-18-0-6-cl8614ufml8g00fqm6cg-5000.direct.labs.play-with-docker.com/api/valor";
            try
            {
                var response = await _httpClient.GetAsync(apiUrl);

                if (response.IsSuccessStatusCode)
                {
                    var content = await response.Content.ReadAsStringAsync();

                    // Deserializa directamente como un diccionario
                    var artistRatings = JsonConvert.DeserializeObject<Dictionary<string, double>>(content);

                    // Convierte el diccionario a una lista de objetos Coseno
                    var cosenoList = artistRatings.Select(artistRating => new Coseno
                    {
                        Nombre = artistRating.Key,
                        Valor_Coseno = artistRating.Value
                    }).ToList();

                    // Guarda los datos en la base de datos
                    _dbContext.Cosenos.AddRange(cosenoList);
                    await _dbContext.SaveChangesAsync();

                    // Devuelve los datos como un objeto JSON
                    return Ok(cosenoList);
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
