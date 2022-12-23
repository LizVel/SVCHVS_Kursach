using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ViewBackend.API.Models;

public class User
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Key]
    public Guid Id { get; set; }

    [Required] 
    public string Username { get; init; } = default!;

    [Required]
    public string Password { get; init; }  = default!;
}