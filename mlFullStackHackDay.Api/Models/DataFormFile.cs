using System.Text.Json.Serialization;

namespace mlFullStackHackDay.Api.Models;

public class DataFormFile
{
    public int Id { get; set; }
    public string? Text { get; set; }
    public bool? RealSentiment { get; set; }

}