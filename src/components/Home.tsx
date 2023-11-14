import { useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import IndexadoToPesos from "./IndexadoToPesos";
import ReajustableToPesos from "./ReajustableToPesos";

const Home: React.FC = () => {
  const [indexSelected, setIndexSelected] = useState<boolean>(true);
  const [reajustableSelected, setReajustableSelected] =
    useState<boolean>(false);

  const handleIndexClick = () => {
    setIndexSelected(true);
    setReajustableSelected(false);
  };

  const handleReajustableClick = () => {
    setIndexSelected(false);
    setReajustableSelected(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold  text-center mb-[1.8rem]">
        Conversor de Unidades Indexadas <br /> y Unidades Reajustables a <br />{" "}
        Pesos Uruguayos{" "}
      </h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl text-slate-500 font-bold mb-6 text-center">
          {indexSelected ? "Unidades Indexadas" : "Unidades Reajustables"}
        </h2>
        <div className="flex mb-4">
          <button
            onClick={handleIndexClick}
            className={`flex-1 p-2 text-center ${
              indexSelected
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Indexada
          </button>
          <button
            onClick={handleReajustableClick}
            className={`flex-1 p-2 text-center ${
              reajustableSelected
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Reajustable
          </button>
        </div>
        {indexSelected && <IndexadoToPesos />}
        {reajustableSelected && <ReajustableToPesos />}
      </div>
      {/* Footer */}
      <footer className="mt-8 text-center text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Cristopher Paiva | Todos los
          derechos reservados
        </p>
        <div className="mt-4 flex justify-center">
          <a
            href="https://github.com/cristopherpds/CUUIR"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 text-gray-500 hover:text-white"
          >
            <AiFillGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/cristopherpds"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white"
          >
            <AiFillLinkedin size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
