import { useState } from "react";
import { Children } from "react";
import { createContext } from "react";

export const FilterContext = createContext();

export const FilterProvider = (props) => {
  const [currentGender, setCurrentGender] = useState(null);

  return (
    <FilterContext.Provider value={{ currentGender, setCurrentGender }}>
      {props.children}
    </FilterContext.Provider>
  );
};
