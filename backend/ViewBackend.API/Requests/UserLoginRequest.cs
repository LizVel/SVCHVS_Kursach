namespace ViewBackend.API.Requests;

public class UserLoginRequest
{
    public string Username { get; set; } = default!;
    
    public string Password { get; set; } = default!;
}