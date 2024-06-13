import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContextProvider";

export const useItemsContext = () => {
  const context = useContext(ItemsContext);
  if (!context) {
    throw new Error(
      "useItemsContext must be used within an ItemsContext Provider"
    );
  }
  return context;
};
