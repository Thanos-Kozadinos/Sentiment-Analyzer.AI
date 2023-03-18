using Microsoft.EntityFrameworkCore;
using mlFullStackHackDay.Api.Data;
using mlFullStackHackDay.Api.Models;
public static class SeedDataFromFile
{
    public static void Initialize(IServiceProvider serviceProvider)
    {
        using (var context = new ApplicationDbContext(
            serviceProvider.GetRequiredService<DbContextOptions<ApplicationDbContext>>()))
        {

            if (context.Files.Any()) { return; }
            string[] lines = System.IO.File.ReadAllLines(@"/Users/salt-dev/newTHANOS/SALT_HACK_DAY/Sentiment-Analyzer.AI/mlFullStackHackDay.Api/Datasets/IMDB_Dataset.csv");
            for(var i = 0; i < 14;i++ )
            {
                var columns = lines[i].Split('"');
                Console.WriteLine(columns.Length);
                var forTheBool = columns[2].Split(',');

                var newFile = new DataFormFile {
                    Text = columns[1],
                    RealSentiment = Convert.ToBoolean(int.Parse(forTheBool[1]))
                };
                context.Files.Add(newFile);
                context.SaveChanges();
            }
        }
    }
}