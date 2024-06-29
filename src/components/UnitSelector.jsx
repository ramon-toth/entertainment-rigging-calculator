import React, { useContext, useState } from 'react';
import { UnitsDispatchContext, UnitsContext } from '../context/unitsContext';
import useLocalStorage from '../hooks/useLocalStorage';

const unitOptions = [
  { id: 'imperial', title: 'Imperial', selected: true },
  { id: 'metric', title: 'Metric', selected: false },
];

export default function UnitSelector() {

  const units = useContext(UnitsContext);

  const [selectedUnit, setSelectedUnit] = useState(unitOptions.find(unit => unit.id === units.id).id);

  const [, storeUnits] = useLocalStorage('units', units);

  const dispatch = useContext(UnitsDispatchContext)


  const handleChange = (e) => {
    setSelectedUnit(e.target.value);
    dispatch({ type: e.target.value });
    storeUnits( e.target.value );
  };

  return (
    <fieldset>
      <div className="space-y-6 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
        {unitOptions.map((unit) => (
          <div key={unit.id} className="flex items-center">
            <input
              id={unit.id}
              name="unit-selector"
              value={unit.id}
              type="radio"
              onChange={handleChange}
              checked={selectedUnit === unit.id}
              className="h-4 w-4 border-gray-300 text-indigo-600"
            />
            <label htmlFor={unit.id} className="ml-3 block text-sm font-medium text-white leading-6">
              {unit.title}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
}