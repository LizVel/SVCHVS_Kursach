using System;

namespace ViewBackend.API.Requests
{
    public class ShortStoryInfo
    {
        public Guid Id { get; set; }

        public string Image { get; set; } = default!;

        public string Type { get; set; } = default!;

        public string? Country { get; set; }

        public string Title { get; set; } = default!;

        public string Text { get; set; } = default!;
    }
}