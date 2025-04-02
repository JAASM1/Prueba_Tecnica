import { useDrop } from 'react-dnd';
import Cruz from "/Cruz.svg";
import { useState } from 'react';

// Componente para renderizar un mueble en el área de trabajo
const PlacedFurniture = ({ furniture, isSelected, onClick }) => {
  return (
    <div 
      className={`absolute cursor-pointer transition-all duration-200 ${
        isSelected ? 'ring-2 ring-blue-500' : ''
      }`}
      style={{
        left: furniture.position?.x || '50%',
        top: furniture.position?.y || '50%',
        transform: 'translate(-50%, -50%)',
        width: `${furniture.width}px`,
        height: `${furniture.height}px`,
      }}
      onClick={() => onClick(furniture)}
    >
      <img 
        src={furniture.image} 
        alt={furniture.name}
        className="w-full h-full object-contain" 
      />
    </div>
  );
};

const WorkspaceArea = ({ placedFurniture = [], onDropFurniture, onSelectFurniture }) => {
  const [selectedId, setSelectedId] = useState(null);
  
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: 'FURNITURE',
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      const dropAreaRect = document.getElementById('dropArea').getBoundingClientRect();
      
      // Calcula la posición relativa dentro del área de trabajo
      const position = {
        x: offset.x - dropAreaRect.left,
        y: offset.y - dropAreaRect.top
      };
      
      onDropFurniture({ ...item, position });
      return { moved: true };
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  const handleSelectFurniture = (furniture) => {
    setSelectedId(furniture.id);
    onSelectFurniture(furniture);
  };

  return (
    <div 
      id="dropArea"
      ref={drop} 
      className={`m-5 border ${
        isOver && canDrop 
          ? 'border-blue-500 bg-blue-50' 
          : placedFurniture.length 
            ? 'border-solid border-quaternary' 
            : 'border-dashed border-quaternary'
      } rounded-lg w-full relative`}
      style={{ minHeight: '300px' }}
    >
      {placedFurniture.length > 0 ? (
        placedFurniture.map((furniture) => (
          <PlacedFurniture 
            key={furniture.id}
            furniture={furniture}
            isSelected={selectedId === furniture.id}
            onClick={handleSelectFurniture}
          />
        ))
      ) : (
        <div className="flex flex-col justify-center items-center h-full">
          <img src={Cruz} alt="dropzone" />
          <p className="font-light text-quaternary text-base text-center">
            Selecciona y arrastra
            <br />
            un mueble al área
          </p>
        </div>
      )}
    </div>
  );
};

export default WorkspaceArea;