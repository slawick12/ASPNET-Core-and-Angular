using System;
using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDtos
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "You must specify password between 4 and 8")]
        public string Password { get; set; }
        public string Gender { get; set; }
        public string KnowAs { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string City { get; set; }
        [Required]
        public string Country { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public UserForRegisterDtos()
        {
            Created = DateTime.Now;
            LastActive = DateTime.Now;

        }

    }
}