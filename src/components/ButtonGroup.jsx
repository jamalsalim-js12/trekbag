import { useItemsStore } from "../stores/itemsStores";
import Button from "./Button";

const ButtonGroup = () => {
  const markAllAscomplete = useItemsStore((state) => state.markAllAscomplete);
  const markAllAsIncomplete = useItemsStore(
    (state) => state.markAllAsIncomplete
  );
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);

  const secondaryButtons = [
    {
      text: "Mark all as complete",
      onClick: markAllAscomplete,
    },
    {
      text: "Mark all as incomplete",
      onClick: markAllAsIncomplete,
    },
    {
      text: "Reset to initial",
      onClick: resetToInitial,
    },
    {
      text: "Remove all items",
      onClick: removeAllItems,
    },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map(({ text, onClick }) => (
        <Button
          key={text + new Date()}
          buttonType="secondary"
          onClick={onClick}>
          {text}
        </Button>
      ))}
    </section>
  );
};

export default ButtonGroup;
