namespace ShopShop.Models
{
    public class Listing
    {
        public int Id { get; set; }
        public string Address { get; set; }
        public int SquareFoot { get; set; }
        public int Rent { get; set; }
        public string Details { get; set; }
        public int YearBuilt { get; set; }
        public string City { get; set; }
        public string ImgUrl { get; set; }
        public int AgentId { get; set; }
    }
}
