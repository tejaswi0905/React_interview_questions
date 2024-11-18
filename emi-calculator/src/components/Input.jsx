/* eslint-disable react/prop-types */


const Input = ({ title, value, setValue }) => {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={title}
    />
  );
};

export default Input;
