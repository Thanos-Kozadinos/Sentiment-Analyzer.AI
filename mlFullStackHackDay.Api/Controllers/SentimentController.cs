using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.ML;
using mlFullStackHackDay.Api.Data;
using mlFullStackHackDay.Api.DTOs;
using mlFullStackHackDay.Api.ML.DataModels;
using mlFullStackHackDay.Api.Models;

namespace mlFullStackHackDay.Api.Controllers
{
    [Route("api/[action]")]
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
        public ActionResult<string> PredictSentiment([FromQuery] string sentimentText)
        {
            SampleObservation sampleData = new SampleObservation() { Text = sentimentText };
            SamplePrediction prediction = _predictionEnginePool.Predict(modelName: "SentimentAnalysisModel", example: sampleData);

            bool isToxic = prediction.Prediction;
            bool test = prediction.Prediction;

            var probability = prediction.Probability;
            string retVal = $"Prediction: Is Toxic?: '{isToxic.ToString()}' with {probability.ToString()}% probability of toxicity  for the text '{sentimentText}'";


            return retVal;

        }
        public static float CalculatePercentage(double value)
        {
            return 100 * (1.0f / (1.0f + (float)Math.Exp(-value)));
        }

        [HttpGet]
        public async Task<ActionResult<User>> GetUsers()
        {
            var users = await _context.Users.Include(u => u.Sentences).ToListAsync();
            if (users is null)
            {
                return NotFound();
            }
            return Ok(users);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetOneUser(int id)
        {
            var user = await _context.Users
                .Include(u => u.Sentences)
                .FirstOrDefaultAsync(us => us.Id == id);
            if (user is null)
            {
                return NotFound();
            }
            return Ok(user);
        }


        [HttpPost]
        public async Task<ActionResult<User>> createUser(CreateUserDTO createUserDTO)
        {
            SampleObservation sampleData = new SampleObservation() { Text = createUserDTO.Text };
            //Predict sentiment
            SamplePrediction prediction = _predictionEnginePool.Predict(modelName: "SentimentAnalysisModel", example: sampleData);

            var newSentence = new Sentence
            {
                Text = createUserDTO.Text,
                ForecastedSentiment = prediction.Prediction,
                Probability = prediction.Probability
            };
            List<Sentence> sentenceList = new List<Sentence>();
            sentenceList.Add(newSentence);

            var newUser = new User
            {
                Name = createUserDTO.Name,
                Sentences = sentenceList
            };

            _context.Users.Add(newUser);
            await _context.SaveChangesAsync();
            // return Ok(newUser);
            return CreatedAtAction(nameof(GetOneUser), new { id = newUser.Id }, newUser);
        }

        [HttpGet]
        public async Task<ActionResult<User>> GetDataFromFile()
        {
            var fileData = await _context.Files.ToListAsync();
            if (fileData is null)
            {
                return NotFound();
            }
            return Ok(fileData);
        }


        [HttpPut]
        public async Task<ActionResult<User>> updateUser(UpdateUserDTO updateUserDTO)
        {
            SampleObservation sampleData = new SampleObservation() { Text = updateUserDTO.Text };
            //Predict sentiment
            SamplePrediction prediction = _predictionEnginePool.Predict(modelName: "SentimentAnalysisModel", example: sampleData);

            var newSentence = new Sentence
            {
                Text = updateUserDTO.Text,
                ForecastedSentiment = prediction.Prediction,
                Probability = prediction.Probability
            };
            var user = await _context.Users
                .Include(u => u.Sentences)
                .FirstOrDefaultAsync(us => us.Id == updateUserDTO.Id);
            user?.Sentences?.Add(newSentence);
            await _context.SaveChangesAsync();
            return Ok(user);
        }
        
    }
}
