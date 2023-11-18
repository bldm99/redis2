using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace Models //nesesari
{
    [Table("vecinos")]
    public class Vecino
    {
        [Column("id")]
        public int Id { get; set; }
        [Column("id_vecino")]
        public string Id_vecino { get; set; }
        [Column("distancia")]
        public double Distancia { get; set; }
    }
}