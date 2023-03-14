# ML_Full_Stack_Tests_at_Salt
ML full stack tests for hack day


# HackTraining
1)
dotnet new sln -n ProjectName
dotnet new webapi -n ProjectName.Api
dotnet new xunit -n ProjectName.Tests
dotnet add ProjectName.Tests reference ProjectName.Api
dotnet sln add **/*.csproj
dotnet build

2)
cd ProjectName
npm create vite frontend
cd frontend
npm install
npm run dev

3)
Create Models

4)
cd ProjectName.Api
dotnet tool install -g dotnet-aspnet-codegenerator
dotnet tool install -g dotnet-ef
dotnet add package Microsoft.EntityFrameworkCore
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.Tools
dotnet aspnet-codegenerator controller -name CustomersController -async -api -m Customer -dc ApplicationDbContext --relativeFolderPath Controllers
dotnet aspnet-codegenerator controller -name AddressesController -async -api -m Address -dc ApplicationDbContext --relativeFolderPath Controllers
dotnet run

5)
Paste in appsettings.json 
"ConnectionStrings": {
    "ApplicationDbContext": "Server=localhost,1433;Database=TestDataBase;User Id=sa;Password=Password_2_Change_4_Real_Cases_&;TrustServerCertificate=True;"
  }
dotnet ef migrations add FirstMigration
dotnet ef database update

6) Feed the DB with Bogus data
-Create a class SeedDataBogus in Data folder
dotnet add package bogus
-In program.cs Add scope:
using (var scope = app.Services.CreateScope())
{
  var services = scope.ServiceProvider;
  SeedDataBogus.Initialize(services);
}

7)
Add CORS to PRogram.cs to share the IP address with FrontEnd
if (app.Environment.IsDevelopment())
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
-To run the VITE from the frontEnd project
npm run dev
Create Types as in the Db
Create the API

8) ML
cd ProjectName.Api
dotnet tool install -g mlnet-osx-x64
or
~/.dotnet/tools/mlnet
-Add data file to folder ML/Data
mkdir  ML

