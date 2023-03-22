using Microsoft.EntityFrameworkCore;
using mlFullStackHackDay.Api.Data;
using mlFullStackHackDay.Api.ML.DataModels;
using Microsoft.Extensions.ML;
using Microsoft.Extensions.Configuration;

var builder = WebApplication.CreateBuilder(args);
// original

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// builder.Services.AddDbContext<ApplicationDbContext>(options =>
//     options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection") ?? throw new InvalidOperationException("Connection string 'DefaultConnection' not found.")));


builder.Services.AddPredictionEnginePool<SampleObservation, SamplePrediction>()
                    .FromFile(builder.Configuration["MLModel:MLModelFilePath"]);

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    SeedDataFromFile.Initialize(services);
}

// Configure the HTTP request pipeline.
/* if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors(policy =>
      {
          policy.AllowAnyOrigin()
                  .AllowAnyMethod()
                  .AllowAnyHeader();  //set the allowed origin
      });
}
 */
//////////////////////

//////////////////////
app.UseSwagger();
app.UseSwaggerUI();
// app.UseCors(policy =>
//   {
//       policy.AllowAnyOrigin()
//               .AllowAnyMethod()
//               .AllowAnyHeader();  //set the allowed origin
//   });

builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy",
    builder => builder
    .AllowAnyMethod()
    .AllowCredentials()
    .SetIsOriginAllowed((host) => true)
    .AllowAnyHeader());
});

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors("CorsPolicy");


app.MapControllers();

app.Run();


Server=tcp:sentimentservernew.database.windows.net,1433;Initial Catalog=sentimentdbnew;Persist Security Info=False;User ID=thanos;Password=sentiment1!;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;

dotnet user-secrets set ConnectionStrings:NewString "Server=tcp:sentimentservernew.database.windows.net,1433;Initial Catalog=sentimentdbnew;Persist Security Info=False;User ID=thanos;Password=sentiment1!;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"