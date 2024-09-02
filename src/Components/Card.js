import React from "react";
import "./Card.css"; // Import the CSS file for Card component

const Card = ({ videoUrl, description }) => {
    return (
        <div className="card">
            <div className="video">
               <iframe
                    width="560"
                    height="315"
                    src={videoUrl}
                    title="Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Card;
