import axios from "axios";

const baseUrl = "https://localhost:7045/api";

const getListings = () => new Promise((resolve, reject) => {
    axios
        .get(`${baseUrl}/Listings`)
        .then((response) => resolve(Object.values(response.data)))
        .catch(reject);
});

export default getListings;