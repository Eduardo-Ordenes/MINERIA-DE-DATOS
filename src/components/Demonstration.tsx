import React from 'react';
import InteractiveChart from './InteractiveChart';

const Demonstration = () => {
  return (
    <section id="demonstration" className="section">
      <h2 className="section-title">Practical Demonstrations</h2>
      
      <div className="content">
        <h3>Video Examples</h3>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/R-bf5IFE79s"
            title="Introduction to Data Mining"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        
        <h3>Interactive Visualization</h3>
        <InteractiveChart />
      </div>
    </section>
  );
};

export default Demonstration;