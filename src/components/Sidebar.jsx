import { useItemsStore } from "../stores/itemsStores";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

const Sidebar = () => {
  const addItem = useItemsStore((state) => state.addItem);
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={addItem} />

      <ButtonGroup />
    </div>
  );
};

export default Sidebar;
