using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.ML;
using mlFullStackHackDay.Api.Data;
using mlFullStackHackDay.Api.ML.DataModels;
using mlFullStackHackDay.Api.Models;

namespace mlFullStackHackDay.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SentimentController : ControllerBase
    {
        private readonly PredictionEnginePool<SampleObservation, SamplePrediction> _predictionEnginePool;
        private readonly ApplicationDbContext _context;

        public SentimentController(PredictionEnginePool<SampleObservation, SamplePrediction> predictionEnginePool, ApplicationDbContext context)
        {
            _predictionEnginePool = predictionEnginePool;
            _context = context;
        }
        
        [HttpGet]
        public ActionResult<string> PredictSentiment([FromQuery]string sentimentText)
        {
            SampleObservation sampleData = new SampleObservation() { Text = sentimentText };

            //Predict sentiment
            SamplePrediction prediction = _predictionEnginePool.Predict(sampleData);

            bool isToxic = prediction.Prediction;
            bool test = prediction.Prediction;

            float probability = CalculatePercentage(prediction.Score);
            string retVal = $"Prediction: Is Toxic?: '{isToxic.ToString()}' with {probability.ToString()}% probability of toxicity  for the text '{sentimentText}'";


            return retVal;

        }
        public static float CalculatePercentage(double value)
        {
            return 100 * (1.0f / (1.0f + (float)Math.Exp(-value)));
        }

        [HttpGet]
        [Route("/[action]")]
        public async Task<ActionResult<User>> GetUsers()
        {
            var users = await _context.Users.Include(u => u.Sentences).ToListAsync();
            return Ok(users);
        }

    }
}
