using ShopShop.Models;

namespace ShopShop.DataAccess
{
    public interface IAgentsRepository
    {
        List<Agent> GetAllAgents();
        Agent GetAgentById(int agentId);
        public void AddAgent(Agent agent);
        public void UpdateAgent(Agent agent);
        public void DeleteAgent(int agentId);
        public bool AgentExists(string uid);
        Agent GetAgentByUid(string uid);

    }
}
