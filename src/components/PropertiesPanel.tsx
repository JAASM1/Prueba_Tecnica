import Separator from "./ui/Separator";

const PropertiesPanel = () => {
  return (
    <div className="w-1/3 bg-white">
      <h1 className="px-2.5 py-5 font-semibold text-secondary">Propiedades</h1>
      <Separator />
      <div className="mt-5 px-2.5">
        <p className="text-quaternary text-sm">Selecciona un mueble </p>
      </div>
    </div>
  );
};

export default PropertiesPanel;
