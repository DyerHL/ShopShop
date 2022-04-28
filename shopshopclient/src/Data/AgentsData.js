import axios from 'axios';

const baseURL = "https://localhost:7045/api/Agents";

const getAllAgents = () => new Promise((resolve, reject) => {
    axios.get(`${baseURL}`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});




const addAgent = () => {};

export {
    getAllAgents,
    addAgent,
 };