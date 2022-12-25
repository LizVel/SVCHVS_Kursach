using AutoMapper;
using ViewBackend.API.Models;
using ViewBackend.API.Requests;

namespace ViewBackend.API.Mappings
{
    public class StoryProfile : Profile
    {
        public StoryProfile()
        {
            CreateMap<Story, ShortStoryInfo>()
                .ForMember(dto => dto.Image,
                    opt => opt
                        .MapFrom(x => x.PreviewImage))
                .ForMember(dto => dto.Text,
                    opt => opt
                        .MapFrom(x => x.ShortText));

            CreateMap<Story, FullStoryInfo>()
                .ForMember(dto => dto.Text,
                    opt => opt
                        .MapFrom(x => x.FullText));
        }
    }
}