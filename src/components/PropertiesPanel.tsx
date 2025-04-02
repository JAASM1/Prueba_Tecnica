import Separator from "./ui/Separator";
import { useState, useEffect } from "react";

const PropertiesPanel = ({ selectedFurniture }) => {
  const [properties, setProperties] = useState({
    width: 100,
    height: 100,
    depth: 50,
    material: 'wood',
    color: '#8B4513',
    price: 199
  });

  // Actualiza las propiedades cuando se selecciona un nuevo mueble
  useEffect(() => {
    if (selectedFurniture) {
      setProperties({
        width: selectedFurniture.width || 100,
        height: selectedFurniture.height || 100,
        depth: selectedFurniture.depth || 50,
        material: selectedFurniture.material || 'wood',
        color: selectedFurniture.color || '#8B4513',
        price: selectedFurniture.price || 199
      });
    }
  }, [selectedFurniture]);

  // Calcula el precio según las dimensiones y material seleccionado
  const calculatePrice = () => {
    if (!selectedFurniture) return 0;
    
    const volume = properties.width * properties.height * properties.depth / 1000000; // convertir a m³
    let basePrice = 199;
    
    // Ajuste por material
    const materialFactor = {
      'wood': 1,
      'metal': 1.5,
      'glass': 1.2,
      'plastic': 0.8
    };
    
    const price = basePrice * volume * (materialFactor[properties.material] || 1);
    return price.toFixed(2);
  };

  if (!selectedFurniture) {
    return (
      <div className="w-1/3 bg-white">
        <h1 className="px-2.5 py-5 font-semibold text-secondary">Propiedades</h1>
        <Separator />
        <div className="mt-5 px-2.5">
          <p className="text-quaternary text-sm">Selecciona un mueble</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-1/3 bg-white">
      <h1 className="px-2.5 py-5 font-semibold text-secondary">Propiedades</h1>
      <Separator />
      
      <div className="mt-5 px-4 space-y-6">
        <h2 className="font-medium text-lg">{selectedFurniture.name}</h2>
        
        {/* Dimensiones */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-secondary">Dimensiones</h3>
          
          <div className="space-y-2">
            <label className="block text-xs text-quaternary">Ancho (cm)</label>
            <input
              type="range"
              min="50"
              max="200"
              value={properties.width}
              onChange={(e) => setProperties({...properties, width: parseInt(e.target.value)})}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-quaternary">
              <span>50cm</span>
              <span>{properties.width}cm</span>
              <span>200cm</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-xs text-quaternary">Alto (cm)</label>
            <input
              type="range"
              min="50"
              max="200"
              value={properties.height}
              onChange={(e) => setProperties({...properties, height: parseInt(e.target.value)})}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-quaternary">
              <span>50cm</span>
              <span>{properties.height}cm</span>
              <span>200cm</span>
            </div>
          </div>
        </div>
        
        {/* Material */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-secondary">Material</h3>
          <div className="grid grid-cols-2 gap-2">
            <button
              className={`p-2 rounded text-center ${properties.material === 'wood' ? 'bg-blue-100 text-blue-700' : 'bg-tertiary text-quaternary'}`}
              onClick={() => setProperties({...properties, material: 'wood', color: '#8B4513'})}
            >
              Madera
            </button>
            <button
              className={`p-2 rounded text-center ${properties.material === 'metal' ? 'bg-blue-100 text-blue-700' : 'bg-tertiary text-quaternary'}`}
              onClick={() => setProperties({...properties, material: 'metal', color: '#C0C0C0'})}
            >
              Metal
            </button>
            <button
              className={`p-2 rounded text-center ${properties.material === 'glass' ? 'bg-blue-100 text-blue-700' : 'bg-tertiary text-quaternary'}`}
              onClick={() => setProperties({...properties, material: 'glass', color: '#ADD8E6'})}
            >
              Vidrio
            </button>
            <button
              className={`p-2 rounded text-center ${properties.material === 'plastic' ? 'bg-blue-100 text-blue-700' : 'bg-tertiary text-quaternary'}`}
              onClick={() => setProperties({...properties, material: 'plastic', color: '#E0E0E0'})}
            >
              Plástico
            </button>
          </div>
        </div>
        
        {/* Precio */}
        <div className="bg-tertiary p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium">Precio total:</h3>
            <p className="text-xl font-bold">${calculatePrice()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesPanel;