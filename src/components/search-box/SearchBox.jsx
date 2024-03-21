import { useId } from "react";

const SearchBox = ({ inputValue, handleChange }) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>Find contacts by name</label>
      <input type="text" id={id} value={inputValue} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
