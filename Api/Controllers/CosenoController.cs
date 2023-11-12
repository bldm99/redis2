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
    public class CosenoController : ControllerBase
    {
        private readonly HttpClient _httpClient;
        private readonly ApplicationDbContext _dbContext;

        public CosenoController(IHttpClientFactory httpClientFactory, ApplicationDbContext dbContext)
        {
            _httpClient = httpClientFactory.CreateClient();
            _dbContext = dbContext;
        }

        [HttpGet]
        [Route("listarcoseno")]
        public async Task<IActionResult> Listar2()
        {
            var apiUrl = "http://ip172-18-0-66-cl8f5cssnmng00drvn60-5000.direct.labs.play-with-docker.com/api/valor";
            try
            {
                var response = await _httpClient.GetAsync(apiUrl);

                if (response.IsSuccessStatusCode)
                {
                    var content = await response.Content.ReadAsStringAsync();

                    // Deserializa directamente como un diccionario
                    var artistRatings = JsonConvert.DeserializeObject<Dictionary<string, double>>(content);

                    // Convierte el diccionario a una lista de objetos Coseno
                    var cosenoList = artistRatings.Select(artistRating => new Cosenos
                    {
                        Nombre = artistRating.Key,
                        Valor_Coseno = artistRating.Value
                    }).ToList();

                    // Convierte la lista de Cosenos a una lista de User
                    var userList = cosenoList.Select(coseno => new User
                    {
                        Nombre = coseno.Nombre,
                        Valor_Coseno = coseno.Valor_Coseno
                    }).ToList();

                    // Guarda los datos en la base de datos
                    //_dbContext.Users.AddRange(cosenoList);
                    _dbContext.Users.AddRange(userList);
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
