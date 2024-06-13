import { useItemsStore } from "../stores/itemsStores";
import Counter from "./Counter";
import Logo from "./Logo";

const Header = () => {
  const items = useItemsStore((state) => state.items);

  return (
    <header>
      <Logo />
      <Counter
        numberOfItemsPacked={items.filter((item) => item.packed).length}
        totalNumberOfItems={items.length}
      />
    </header>
  );
};

export default Header;
