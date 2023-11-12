
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Api.Models; //nesesari
public class Cosenos
{
    /*[Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]*/
    public int Id { get; set; }
    public string Nombre { get; set; }
    public double Valor_Coseno { get; set; }
}