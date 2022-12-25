using System.ComponentModel.DataAnnotations;

namespace ViewBackend.API.Models
{
    public class Story : Entity
    {
        public string? Country { get; set; }

        [Required]
        public string Title { get; set; } = default!;
    
        [Required]
        public string Subtitle { get; set; } = default!;
    
        [Required]
        public string FullText { get; set; } = default!;
    
        [Required]
        public string ShortText { get; set; } = default!;
    
        [Required]
        public string MainImage { get; set; } = default!;
    
        [Required]
        public string FirstAdditionalImage { get; set; } = default!;
    
        [Required]
        public string SecondAdditionalImage { get; set; } = default!;
    
        [Required]
        public string PreviewImage { get; set; } = default!;

        [Required]
        public string Type { get; set; } = default!;
    }
}

