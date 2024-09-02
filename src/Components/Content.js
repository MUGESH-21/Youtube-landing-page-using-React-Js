import React from "react";
import Card from "./Card";
import "./Content.css"; // Import the CSS file for Content component

const videos = [
    { url: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Video 1" },
    { url: "https://www.youtube.com/embed/3JZ_D3ELwOQ", description: "Video 2" },
    { url: "https://www.youtube.com/embed/L_jWHffIx5E", description: "Video 3" },
    { url: "https://www.youtube.com/embed/9bZkp7q19f0", description: "Video 4" },
    { url: "https://www.youtube.com/embed/ZZ5LpwO-An4", description: "Video 5" },
    { url: "https://www.youtube.com/embed/poo0BXryffI?si=cVmnTK9QzHylsCwl", description: "Video 6" }
];

const Content = () => {
    return (
        <main className="content">
            {videos.map((video, index) => (
                <Card key={index} videoUrl={video.url} description={video.description} />
            ))}
        </main>
    );
};

export default Content;
