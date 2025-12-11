const Input = ({ type, placeholder, style = "", onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`generalInput ${style}`}
      onChange={onChange}
      required
    />
  );
};

export default Input;
