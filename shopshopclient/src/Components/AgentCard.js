import React from "react";
import PropTypes from "prop-types";

export default function AgentCard({card}) {
    return (
        <div className="agent-card">
            <div className="img-position">
                <img src={card.imgURL} className="img" />
            </div>
            <div className="agent-card-body">
                <div className="item">{card.name}</div>
                <div className="item">{card.bio}</div>
                <div className="item">{card.email}</div>
            </div>

        </div>
    );
}

AgentCard.propTypes = {
    card: PropTypes.shape(PropTypes.obj).isRequired,
};