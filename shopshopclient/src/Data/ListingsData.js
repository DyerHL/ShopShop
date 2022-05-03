import axios from "axios";

const baseUrl = "https://localhost:7045/api";

const getListings = () => new Promise((resolve, reject) => {
    axios
        .get(`${baseUrl}/Listings`)
        .then((response) => resolve(Object.values(response.data)))
        .catch(reject);
});

const getListingsById = (id) => new Promise((resolve, reject) => {
    axios
        .get(`${baseUrl}/listings/listings/${id}`)
        .then((response) => resolve(response.data))
        .catch(reject);
});

const deleteListing = (id) => new Promise((resolve, reject) => {
    axios
        .delete(`${baseUrl}/listings/listings/${id}.json`)
        .then((response) => resolve(response.data))
        .catch(reject)
})

export {getListings, getListingsById, deleteListing};