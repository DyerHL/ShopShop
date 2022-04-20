import React from "react";
import nashSkyline from '../Assets/nashSkyline.jpg';

export default function EditListingView() {
    //const [editAgent, setEditAgent] = useState({});
    //const { key name defined in routes } = useParams();

    /* 
    useEffect(() => {
        getSingleAgent(key name defined in routes).then(setEditAgent);
    }, []); 
    */

    return (
            <div className="body">
                <img src={nashSkyline} className="img" />
                <div className="title">
                    Edit Listing
                    <hr className="hr" />
                </div>
                <div className="div-body">
                    {/*<ListingForm obj={editAgent} />*/}
                </div>
            </div>
    );
}