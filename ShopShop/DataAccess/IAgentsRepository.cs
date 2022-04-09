using ShopShop.Models;

namespace ShopShop.DataAccess
{
    public interface IAgentsRepository
    {
        List<Agent> GetAllAgents();
    }
}
