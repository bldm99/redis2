
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Api.Models; //nesesari
public class Vecinoget
{
    public int Id { get; set; }
    public string Id_vecino { get; set; }
    public double Distancia { get; set; }
}