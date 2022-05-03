import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAgentById } from "../Data/AgentsData";
import { getListingsById } from "../Data/ListingsData";

export default function SingleListingView() {
  const [listing, setListing] = useState({});
  const [agent, setAgent] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getListingsById(id).then((listing) => setListing(listing));
      getAgentById(listing.agentId).then(setAgent);
    }
    return () => {
      isMounted = false;
    };
  }, [id, listing.agentId]);

  return (
    <div className="body" id="singleListingDiv">
      <img url={listing.imgUrl} alt={listing.address} />
      <div className="listing-item">
        <h4>
          <b>Location:</b>
        </h4>
        <h6>{listing.address}</h6>
      </div>
      <div className="listing-item">
        <h4>
          <b>City:</b>
        </h4>
        <h6>{listing.city}</h6>
      </div>
      <div className="listing-item">
        <h4>
          <b>Details:</b>
        </h4>
        <h6>{listing.details}</h6>
      </div>
      <div className="listing-item">
        <h4>
          <b>Rent:</b>
        </h4>
        <h4>${listing.rent}</h4>
      </div>
      <div className="listing-item">
        <h4>
          <b>Square Feet:</b>
        </h4>
        <h4>{listing.squareFoot}</h4>
      </div>
      <div className="listing-item">
        <h4>
          <b>Year Built:</b>{" "}
        </h4>
        <h4>{listing.yearBuilt}</h4>
      </div>
      <div className="listing-item">
        <h4>
          <b>Agent:</b>{" "}
        </h4>
        <h4>{agent.name}</h4>
      </div>
    </div>
  );
}
