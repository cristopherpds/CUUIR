// src/components/ReajustableToPesos.tsx
import React, { useState } from "react";

const ReajustableToPesos: React.FC = () => {
  const [reajustableValue, setReajustableValue] = useState<number>(0);
  const [pesosValue, setPesosValue] = useState<number>(0);

  const convertToPesos = (value: number, factorAjuste: number): number => {
    // Aquí puedes implementar la fórmula de conversión específica para unidades reajustables
    // por ejemplo:
    // const pesos = value * factorAjuste;
    // return pesos;
    return value * factorAjuste; // Reemplaza esto con la fórmula real de conversión.
  };

  const handleReajustableChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = parseFloat(event.target.value);
    setReajustableValue(newValue);

    // Aquí vamos a asumir que el factor de ajuste es 1.5, pero debes reemplazarlo con el valor correcto.
    const factorAjuste = 1597.62;
    const pesos = parseFloat(convertToPesos(newValue, factorAjuste).toFixed(2));
    setPesosValue(pesos);
  };

  return (
    <div className="bg-slate-200 shadow-md m-4 rounded-lg p-4">
      <label className="block text-sm font-medium text-gray-700">
        Unidades reajustables:
        <input
          type="number"
          value={reajustableValue}
          onChange={handleReajustableChange}
          className="my-3 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:outline-none focus:border-blue-500"
        />
      </label>
      <p className="mt-2 block text-sm font-medium text-gray-700">$UYU: {pesosValue}</p>
    </div>
  );
};

export default ReajustableToPesos;
