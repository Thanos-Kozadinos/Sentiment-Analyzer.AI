using Microsoft.ML.Data;

namespace mlFullStackHackDay.Api.ML.DataModels;

public class SampleObservation
{
    [LoadColumn(1)]
    public bool Label { get; set; }
    [LoadColumn(0)]
    public string? Text { get; set; }
}
