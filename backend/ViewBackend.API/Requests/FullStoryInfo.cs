namespace ViewBackend.API.Requests;

public class FullStoryInfo
{
    public Guid Id { get; set; }
    
    public string? Country { get; set; }
    
    public string Title { get; set; }
    
    public string Subtitle { get; set; }
    
    public string Text { get; set; } 
    
    public string MainImage { get; set; }
    
    public string FirstAdditionalImage { get; set; }
    
    public string SecondAdditionalImage { get; set; }
}