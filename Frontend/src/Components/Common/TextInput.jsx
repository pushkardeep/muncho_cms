import React from "react";

function TextInput({ name, placeholder, value, onChange, styles = "" }) {
  return (
    <input
      className={`poppins_reg w-full text-[14px] text-[#5C5C7A] placeholder:text-[#5C5C7A] focus:outline-none px-2 py-3 ${styles}`}
      onChange={onChange}
      value={value}
      type="text"
      name={name}
      placeholder={placeholder}
    />
  );
}

export default TextInput;
