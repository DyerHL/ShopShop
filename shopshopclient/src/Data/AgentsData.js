import axios from 'axios';

const baseURL = "https://localhost:7045/api/Agents";

const getAllAgents = () => new Promise((resolve, reject) => {
    axios.get(`${baseURL}`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

//current return type is object, may need to be updated later depending on usage
const getAgentById = (id) => new Promise((resolve, reject) => {
    axios.get(`${baseURL}/Agents/${id}`)
    .then((response) => resolve(response.data))
    .catch(reject);
});



const addAgent = () => {};

export {
    getAllAgents,
    getAgentById,
    addAgent,
 };