const Counter = ({ numberOfItemsPacked, totalNumberOfItems }) => {
  return (
    <p>
      <b>{numberOfItemsPacked}</b> / {totalNumberOfItems} items packed
    </p>
  );
};

export default Counter;
