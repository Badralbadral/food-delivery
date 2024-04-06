import { useState, useContext, createContext, Dispatch } from "react";
export type ContextType = {
  category: string;
  setCategory: Dispatch<React.SetStateAction<string>>;
};
const FoodContext = createContext<ContextType | null>(null);
export const useFoodData = () => useContext(FoodContext);

const FoodProvider = ({ children }: { children: any }) => {
  const [category, setCategory] = useState<string>("Breakfast");

  return (
    <FoodContext.Provider value={{ category, setCategory }}>
      {children}
    </FoodContext.Provider>
  );
};
export default FoodProvider;
