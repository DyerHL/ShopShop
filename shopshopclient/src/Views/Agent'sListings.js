import React from 'react';
import nashSkyline from '../Assets/nashSkyline.jpg';

export default function AgentsListingsView() {
   //const [listings, setListings] = useState({});

   /*
   useEffect(() => {
       let isMounted = true;
       if (isMounted) {
           getListings().then(setListings);
       }
       return () => {
           isMounted = false;
       };
   }, []);
    */

    return (
        <div>
            <div className="body">
                <img src={nashSkyline} className="img" />
                <div className="title">
                    Your Listings
                    <hr className="hr" />
                </div>
                <div className="div-body">
                    {/*
                    <div className="cards">
                        {listings.map((card) => (
                            <ListingsCard setListings={setListings} card={card} />
                        ))}
                    </div>
                    */}
                </div>
            </div>
        </div>
    )
}