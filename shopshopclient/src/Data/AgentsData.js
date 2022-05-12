import axios from 'axios';

const baseURL = "https://localhost:7045/api/Agents";

const getAllAgents = () => new Promise((resolve, reject) => {
    axios.get(`${baseURL}`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const getAgentById = (id) => new Promise((resolve, reject) => {
    axios.get(`${baseURL}/Agents/${id}`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const getAgentByUid = (uid) => new Promise((resolve, reject) => {
    axios.get(`${baseURL}/Agents/${uid}`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const updateAgent = (updateObj, uid) => new Promise((resolve, reject) => {
    axios.patch(`${baseURL}/Agents/${uid}`, updateObj)
    .then(getAgentByUid(uid).then(resolve))
    .catch(reject);
})

export {
    getAllAgents,
    getAgentById,
    getAgentByUid,
    updateAgent
 };