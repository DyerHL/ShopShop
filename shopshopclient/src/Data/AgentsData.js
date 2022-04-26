//import axios from 'axios';

const baseURL = 'shopshopserver.database.windows.net/api/Agents';

// const getAllAgents = () => new Promise((resolve, reject) => {
//     axios.get(`${baseURL}/Agents.json`)
//     .then((response) => resolve(Object.values(response.data)))
//     .catch(reject);
// });

const getAllAgents = () => new Promise((resolve,reject) => {
    return fetch(`${baseURL}.json`)
    .then((res) => resolve(Object.values(res.data)))
    .catch(reject)
});

const addAgent = () => {};

export {
    getAllAgents,
    addAgent,
 };