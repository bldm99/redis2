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
    public class VervecinoController : ControllerBase
    {
        private readonly VeciDbContext _dbContext;

        public VervecinoController(VeciDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        [Route("listarvecinos")]
        public IActionResult ListarCosenosRegistrados()
        {
            // Obtén todos los registros de la base de datos
            List<Vecinoget> vervecinos = _dbContext.Vecinos
                .OrderBy(v => v.Distancia)
                .Take(10)
                .Select(v => new Vecinoget
                {
                    Id = v.Id,
                    Id_vecino = v.Id_vecino,
                    Distancia = v.Distancia
                })
                .ToList();

            return Ok(vervecinos);
        }
    }
}
