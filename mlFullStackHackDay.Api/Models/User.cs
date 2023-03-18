using System.Text.Json.Serialization;

namespace mlFullStackHackDay.Api.Models;

public class User
{
    public int Id { get; set; }
    public required string Name { get; set; } 
    public List<Sentence>? Sentences { get; set; }

}