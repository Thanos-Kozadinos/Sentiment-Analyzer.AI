using Microsoft.EntityFrameworkCore;
using mlFullStackHackDay.Api.Data;
using mlFullStackHackDay.Api.ML.DataModels;
using Microsoft.Extensions.ML;
using Microsoft.Extensions.Configuration;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddPredictionEnginePool<SampleObservation, SamplePrediction>()
                    .FromFile(builder.Configuration["MLModel:MLModelFilePath"]);
// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy",
    builder => builder
    .AllowAnyMethod()
    .AllowCredentials()
    .SetIsOriginAllowed((host) => true)
    .AllowAnyHeader());
});
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();




using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    SeedDataFromFile.Initialize(services);
}
// Configure the HTTP request pipeline.
app.UseSwagger();
app.UseSwaggerUI();
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.UseCors("CorsPolicy");
app.Run();