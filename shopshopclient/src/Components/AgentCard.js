import React from "react";
import PropTypes from "prop-types";

export default function AgentCard({card}) {
    return (
        <div className="agent-card">
            <div className="img-position">
                <img src='https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png' className="img" />
            </div>
            <div className="agent-card-body">
                <div className="item">{card.Name} Name</div>
                <div className="item">{card.Bio} Bio</div>
                <div className="item">{card.Email} Email</div>
            </div>

        </div>
    );
}

AgentCard.propTypes = {
    card: PropTypes.shape(PropTypes.obj),
};