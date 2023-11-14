using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Api.Models;
using Api.Data;

namespace Api.Controllers
{
    [ApiController]
    [Route("data")]
    public class CosenoRegistradoController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public CosenoRegistradoController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        [Route("listarcosenosregistrados")]
        public IActionResult ListarCosenosRegistrados()
        {
            // Obtén todos los registros de la base de datos
            List<Pelirating> resratings = _dbContext.Users
                .Select(p => new Pelirating
                {
                    /*Id = c.Id,
                    Nombre = c.Nombre,
                    Valor_Coseno = c.Valor_Coseno*/
                    Id = p.Id,
                    Conteo = p.Conteo,
                    Rating = p.Rating
                })
                .ToList();

            return Ok(resratings);
        }
    }
}
