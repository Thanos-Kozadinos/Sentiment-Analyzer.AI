using System.Text.Json.Serialization;

namespace mlFullStackHackDay.Api.Models;

public class Sentence
{
    public int Id { get; set; }
    public required string Text { get; set; }
    public bool? ForecastedSentiment { get; set; }
    public bool? RealSentiment { get; set; }
    [JsonIgnore]
    public User? User { get; set; }
    [JsonIgnore]
    public int? UserId { get; set; }

}