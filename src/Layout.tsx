import CatalogPanel from "./components/CatalogPanel";
import WorkspaceArea from "./components/WorkspaceArea";
import PropertiesPanel from "./components/PropertiesPanel";

function Layout() {
  return (
    <>
      <div className="flex justify-between flex-row h-screen w-full bg-primary">
        <CatalogPanel />
        <WorkspaceArea />
        <PropertiesPanel />
      </div>
    </>
  );
}

export default Layout;
