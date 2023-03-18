using Microsoft.ML.Data;

namespace mlFullStackHackDay.Api.ML.DataModels;
public class SamplePrediction
{
    [ColumnName("PredictedLabel")]
    public bool Prediction { get; set; }
    public float Probability { get; set; }

    public float Score { get; set; }
}

