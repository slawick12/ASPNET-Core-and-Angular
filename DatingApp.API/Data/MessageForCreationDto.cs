using System;

namespace DatingApp.API.Data
{
    public class MessageForCreationDto
    {
        public int SenderId { get; set; }
        public int RecepientId { get; set; }
        public DateTime MessageSent { get; set; }
        public string Content { get; set; }
        public MessageForCreationDto(){
            MessageSent= DateTime.Now;
        }
    }
    
}