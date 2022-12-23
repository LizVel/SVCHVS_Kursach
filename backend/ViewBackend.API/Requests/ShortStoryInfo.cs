namespace ViewBackend.API.Requests;

public class ShortStoryInfo
{
    public Guid Id { get; set; }
    
    public string Image { get; set; }
    
    public string Type { get; set; }
    
    public string? Country { get; set; }
    
    public string Title { get; set; }
    
    public string Text { get; set; } 
}