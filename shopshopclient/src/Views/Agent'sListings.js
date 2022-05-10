import { useState, useEffect } from 'react';
import ListingCard from '../Components/ListingCard.js';
import nashSkyline from '../Assets/nashSkyline.jpg';
import { getListingsById } from '../Data/ListingsData.js';
import { useParams } from 'react-router-dom';

export default function AgentsListingsView() {
   const [listings, setListings] = useState([]);
   const { key } = useParams();

   useEffect(() => {
       let isMounted = true;
       if (isMounted) {
           getListingsById(key).then(setListings);
       }
       return () => {
           isMounted = false;
       };
   }, []);

    return (
        <div>
            <div className="body">
                <img src={nashSkyline} className="img" alt="nashville skyline" />
                <div className="title">
                    Your Listings
                    <hr className="hr" />
                </div>
                <div className="div-body">
                    <div className="cards">
                        {listings.map((card) => (
                            <ListingCard setListings={setListings} card={card} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}