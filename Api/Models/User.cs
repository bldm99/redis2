using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace Models //nesesari
{
    [Table("users")]
    public class User
    {
        [Column("id")]
        public int Id { get; set; }
        [Column("nombre")]
        public string Nombre { get; set; }
         [Column("valor_coseno")]
        public double Valor_Coseno { get; set; }
        /*[Column("id")]
        public int Id { get; set; }
        [Column("conteo")]
        public string Conteo { get; set; }
        [Column("rating")]
        public double Rating { get; set; }*/
    }
}