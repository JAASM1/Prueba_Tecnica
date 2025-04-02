import Cruz from "../../public/Cruz.svg";
const WorkspaceArea = () => {
  return (
    <>
      <div className="m-5 border border-dashed border-quaternary rounded-lg w-full flex justify-center">
        <div className="flex flex-col justify-center items-center">
          <img src={Cruz} alt="dropzone" />
          <p className="font-light text-quaternary text-base text-center">
            Selecciona y arrastra
            <br />
            un mueble al área
          </p>
        </div>
      </div>
    </>
  );
};

export default WorkspaceArea;
