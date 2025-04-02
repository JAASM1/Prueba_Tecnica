import Separator from "./ui/Separator";
import {
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import categoriesData from "../Data/categories.json";

const CatalogPanel = () => {
  const [openCategory, setOpenCategory] = useState<number | null>(null);

  const toggleCategory = (id: number) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  return (
    <aside className="bg-white w-1/3">
      <h1 className="px-5 py-8 font-semibold text-xl">Logo</h1>
      <Separator />
      <div className="mt-3 px-2.5">
        <h2 className="text-secondary font-bold text-xs">Catalogo</h2>
        <div className="flex gap-2.5 items-center mt-2.5">
          <div className="flex items-center gap-2 w-full bg-tertiary text-quaternary py-1 px-2.5 rounded">
            <MagnifyingGlassIcon className="size-4" />
            <input
              type="text"
              className="w-full outline-none placeholder:text-quaternary placeholder:text-xs text-sm text-black"
              placeholder="Buscar mueble"
            />
          </div>
          <div className="flex justify-center items-center gap-2">
            <AdjustmentsVerticalIcon className="size-5 text-quaternary" />
            <XMarkIcon className="size-5 text-quaternary" />
          </div>
        </div>
      </div>
      <div className="space-y-0.5 mt-2.5">
        {categoriesData.Categorias.map((category) => (
          <div key={category.id} className="border-y border-separator">
            <div
              className="text-quaternary flex justify-between p-2.5 cursor-pointer"
              onClick={() => toggleCategory(category.id)}
            >
              <p className="text-sm">{category.categoria || "Sin categoría"}</p>
              <ChevronDownIcon
                className={`size-5 stroke-2 transform ${
                  openCategory === category.id ? "rotate-180" : ""
                }`}
              />
            </div>
            {openCategory === category.id && (
              <div className="m-2 rounded p-2.5 bg-tertiary flex items-center gap-2">
                {category.tipo.nombre ? (
                  <>
                    <img
                      src={category.tipo.imagen}
                      alt={category.tipo.nombre}
                      className="w-12 h-12 object-contain"
                    />
                    <p className="text-sm font-semibold">{category.tipo.nombre}</p>
                  </>
                ) : (
                  <p className="text-sm text-quaternary">Sin muebles</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default CatalogPanel;
