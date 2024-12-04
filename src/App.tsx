import React from 'react';
import Navigation from './components/Navigation';
import ConceptsSection from './components/sections/ConceptsSection';
import ToolsSection from './components/sections/ToolsSection';
import ResourcesSection from './components/sections/ResourcesSection';
import DemoSection from './components/sections/DemoSection';
import './styles/global.css';

function App() {
  return (
    <div>
      <Navigation />
      <main className="container">
        <ConceptsSection />
        <ToolsSection />
        <ResourcesSection />
        <DemoSection />
      </main>
    </div>
  );
}

export default App;