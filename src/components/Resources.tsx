import React from 'react';

const Resources = () => {
  return (
    <section id="resources" className="section">
      <h2 className="section-title">External Resources</h2>
      
      <div className="content">
        <h3>Public Datasets</h3>
        <ul>
          <li>
            <a 
              href="https://www.kaggle.com/datasets" 
              target="_blank" 
              rel="noopener noreferrer"
              className="external-link"
            >
              Kaggle Datasets
            </a>
          </li>
          <li>
            <a 
              href="https://archive.ics.uci.edu/ml/index.php" 
              target="_blank" 
              rel="noopener noreferrer"
              className="external-link"
            >
              UCI Machine Learning Repository
            </a>
          </li>
        </ul>
        
        <h3>Tutorials and Articles</h3>
        <ul>
          <li>
            <a 
              href="https://www.kdnuggets.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="external-link"
            >
              KDnuggets - Data Mining Resources
            </a>
          </li>
          <li>
            <a 
              href="https://machinelearningmastery.com/start-here/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="external-link"
            >
              Machine Learning Mastery
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Resources;