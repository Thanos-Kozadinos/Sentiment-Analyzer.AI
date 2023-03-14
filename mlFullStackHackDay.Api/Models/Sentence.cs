namespace mlFullStackHackDay.Api.Models;

public class Sentence
{
    public int Id { get; set; }
    public required string Text { get; set; }
    public bool ForecastedSentiment { get; set; }
    public bool RealSentiment { get; set; }
    public User? User { get; set; }
    public int UserId { get; set; }

}