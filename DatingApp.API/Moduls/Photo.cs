using System;

namespace DatingApp.API.Moduls
{
    public class Photo
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public int Description { get; set; }
        public DateTime DateAdded { get; set; }
        public bool  IsMain { get; set; }
    }
}