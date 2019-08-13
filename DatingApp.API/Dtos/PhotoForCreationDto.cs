using System;
using Microsoft.AspNetCore.Http;

namespace DatingApp.API.Dtos
{
    public class PhotoForCreationDto
    {
        private IFormFile file;

        public string Url { get; set; }
        public IFormFile File { get => file; set => file = value; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        public string PublicId { get; set; }

        public PhotoForCreationDto()
        {
            DateAdded = DateTime.Now;
        }
    }
}