using System;

namespace ViewBackend.API.Requests
{
    public class FullStoryInfo
    {
        public Guid Id { get; set; }

        public string? Country { get; set; }

        public string Title { get; set; } = default!;

        public string Subtitle { get; set; } = default!;

        public string Text { get; set; } = default!;

        public string MainImage { get; set; } = default!;

        public string FirstAdditionalImage { get; set; } = default!;

        public string SecondAdditionalImage { get; set; } = default!;
    }
}