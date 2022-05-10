import axios from "axios";

const baseUrl = "https://localhost:7045/api";

const getListings = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseUrl}/Listings`)
      .then((response) => resolve(Object.values(response.data)))
      .catch(reject);
  });

const getListingsById = (id) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseUrl}/listings/listings/${id}`)
      .then((response) => resolve(response.data))
      .catch(reject);
  });

const createListing = (listingObj) => 
 new Promise((resolve, reject) => {
   axios
    .post(`${baseUrl}/listings`, listingObj)
    .then((response) => resolve(response.data))
    .catch(reject);
 })

const deleteListing = (id) =>
  new Promise((resolve, reject) => {
    console.warn(baseUrl);
    axios
      .delete(`${baseUrl}/listings/listings/${id}`)
      .then(() => getListings().then(resolve))
      .catch(reject);
  });

export { getListings, getListingsById, deleteListing, createListing };
