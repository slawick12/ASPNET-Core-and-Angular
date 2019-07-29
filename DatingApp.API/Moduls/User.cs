namespace DatingApp.API.Moduls
{
    public class User
    {
        
        public int Id { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswrdSalt { get; set; }
    }
}