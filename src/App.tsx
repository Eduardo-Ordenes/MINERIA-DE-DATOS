// import React from 'react';
// import Navigation from './components/Navigation';
// import ConceptsSection from './components/sections/ConceptsSection';
// import ToolsSection from './components/sections/ToolsSection';
// import ResourcesSection from './components/sections/ResourcesSection';
// import DemoSection from './components/sections/DemoSection';
// import AppDatamining from './components/sections/DataMiningCharts';
// import './styles/global.css';
// import Glossary from './components/sections/Glossary';

// function App() {
//   return (
//     <div>
//       <Navigation />
//       <main className="container">
//         <ConceptsSection />
//         <ToolsSection />
//         <ResourcesSection />
//         <DemoSection />
//       </main>
//       <AppDatamining />
//       <Glossary  />
//     </div>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navigation from './components/Navigation';
import ConceptsSection from './components/sections/ConceptsSection';
import ToolsSection from './components/sections/ToolsSection';
import ResourcesSection from './components/sections/ResourcesSection';
import DemoSection from './components/sections/DemoSection';
import AppDatamining from './components/sections/DataMiningCharts';
import './styles/global.css';
import Glossary from './components/sections/Glossary';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        {/* Página de inicio */}
        <Route path="/mineria" element={
          <>
            <main className="container">
              <ConceptsSection />
              <ToolsSection />
              <ResourcesSection />
              <DemoSection />
            </main>
            {/* <AppDatamining /> */}
          </>
        } />
        
        <Route path="/mineria/graficos" element={<AppDatamining />} />
        {/* Página de Glosario */}
        <Route path="/mineria/glosario" element={<Glossary />} />
      </Routes>
    </Router>
  );
}

export default App;
