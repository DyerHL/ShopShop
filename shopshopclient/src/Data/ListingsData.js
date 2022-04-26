import axios from "axios";

const dbUrl = "shopshopserver.database.windows.net/api";

const getListings = () => new Promise((resolve, reject) => {
    axios
        .get(`${dbUrl}/listings.json`)
        .then((response) => resolve(Object.values(response.data)))
        .catch(reject);
});

export default getListings;