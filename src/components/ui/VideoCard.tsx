import React from 'react';

interface VideoCardProps {
  url: string;
  title: string;
  description: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ url, title, description }) => {
  return (
    <div className="video-card">
      <div className="video-container">
        <iframe
          src={url}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="video-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;