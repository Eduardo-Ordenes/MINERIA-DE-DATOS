import React from 'react';

const Documentation = () => {
  return (
    <section id="documentation" className="section">
      <h2 className="section-title">Data Mining Documentation</h2>
      
      <div className="content">
        <h3>Basic Concepts</h3>
        <p>Data mining is the process of discovering patterns and relationships within large datasets. It combines statistics, artificial intelligence, and database management to extract meaningful insights from data.</p>
        
        <h3>Key Tools</h3>
        <ul>
          <li>
            <strong>Orange:</strong> Visual programming tool for data mining, featuring a user-friendly interface and powerful visualization capabilities.
          </li>
          <li>
            <strong>KNIME:</strong> Open-source data analytics platform that allows for visual assembly and interactive execution of data pipelines.
          </li>
          <li>
            <strong>RapidMiner:</strong> Comprehensive data science platform that provides an integrated environment for data prep, machine learning, and model deployment.
          </li>
          <li>
            <strong>Weka:</strong> Collection of machine learning algorithms for data mining tasks, developed at the University of Waikato.
          </li>
        </ul>
        
        <h3>Advanced Concepts</h3>
        <ul>
          <li>Classification: Predicting categorical class labels</li>
          <li>Clustering: Grouping similar objects together</li>
          <li>Association Analysis: Discovering relationship patterns</li>
          <li>Anomaly Detection: Identifying unusual patterns</li>
        </ul>
      </div>
    </section>
  );
};

export default Documentation;