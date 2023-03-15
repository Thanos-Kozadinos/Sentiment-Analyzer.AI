namespace mlFullStackHackDay.Api.DTOs;

public class CreateUserDTO
{
    public required string Name { get; set; } // somehow enforce it to be unique?
    public required string Text { get; set; }

}