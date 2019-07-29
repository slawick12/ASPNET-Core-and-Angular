namespace DatingApp.API.Moduls
{
    public class User
    {
        
        public int Id { get; set; }
        public string Username { get; set; }
        public byte[] PaswordHash { get; set; }
        public byte[] PaswrdSalt { get; set; }
    }
}