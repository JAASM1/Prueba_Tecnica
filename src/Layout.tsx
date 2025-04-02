import { DndProvider } from 'react-dnd/dist/core';
import { HTML5Backend } from 'react-dnd-html5-backend';
import CatalogPanel from "./components/CatalogPanel";
import WorkspaceArea from "./components/WorkspaceArea";
import PropertiesPanel from "./components/PropertiesPanel";
import { useState } from 'react';

function Layout() {
  const [selectedFurniture, setSelectedFurniture] = useState(null);
  const [placedFurniture, setPlacedFurniture] = useState([]);

  const handleDropFurniture = (item) => {
    setPlacedFurniture([...placedFurniture, { ...item, id: Date.now() }]);
  };

  const handleSelectFurniture = (furniture) => {
    setSelectedFurniture(furniture);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex justify-between flex-row h-screen w-full bg-primary">
        <CatalogPanel />
        <WorkspaceArea 
          placedFurniture={placedFurniture} 
          onDropFurniture={handleDropFurniture}
          onSelectFurniture={handleSelectFurniture}
        />
        <PropertiesPanel selectedFurniture={selectedFurniture} />
      </div>
    </DndProvider>
  );
}

export default Layout;