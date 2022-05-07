using FirebaseAdmin.Auth;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShopShop.DataAccess;
using ShopShop.Models;

namespace ShopShop.Controllers
{
   [Route("api/[controller]")]
   [ApiController]
    public class AgentsController : ControllerBase
    {
        private readonly IAgentsRepository _agentRepo;
        
        public AgentsController(IAgentsRepository agentsRepository)
        {
            _agentRepo = agentsRepository;
        }

        // GET all agents
        [HttpGet]
        public List<Agent> GetAllAgents()
        {
            return _agentRepo.GetAllAgents();
        }

        // GET an agent by their Id
        [HttpGet("Agents/{id}")]
        public ActionResult GetAgentById(int id)
        {
            Agent agent = _agentRepo.GetAgentById(id);
            if (agent == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(agent);
            }
        }

        // POST new agent
        [HttpPost]
        public ActionResult CreateAgent(Agent newagent)
        {
            if (newagent == null)
            {
                return NotFound();
            }
            else
            {
                _agentRepo.AddAgent(newagent);
                return Ok(newagent);
            }
        }

        // PATCH an agent
        [HttpPatch("Agents/{id}")]
        public ActionResult EditAgent(int id, Agent updatedAgent)
        {
            Agent agent = _agentRepo.GetAgentById(id);

            if (agent != null)
            {
                _agentRepo.UpdateAgent(updatedAgent);
                return Ok(updatedAgent);

            }
            else
            {
                return BadRequest(agent);
            }
        }

        // DELETE an agent
        [HttpDelete("Agents/{id}")]
        public ActionResult DeleteAgent(int id, Agent agent)
        {
            try
            {
                _agentRepo.DeleteAgent(id);
                return Ok(agent);
            }
            catch (Exception ex)
            {
                return BadRequest(agent);
            }
        }

        [Authorize]
        [HttpGet("Auth")]
        public async Task<IActionResult> GetAgentAuthStatus()
        {
            //var token = authorization.substring(6);
            //FirebaseToken decoded = await FirebaseAuth.DefaultInstance.VerifyIdTokenAsync(idToken);
            //var uid = decoded.Uid;
            //var uid = user.findfirst(claim => claim.type == "user_id").value;
            string uid = User.FindFirst(claim => claim.Type == "user_id").Value;
            bool agentexists = _agentRepo.AgentExists(uid);
            if (!agentexists)
            {
                Agent agentfromtoken = new Agent()
                {
                    Name = User.Identity.Name,
                    Uid = uid,
                };

                _agentRepo.AddAgent(agentfromtoken);
                return Ok();
            }
            return Ok();
        }
    }
}
