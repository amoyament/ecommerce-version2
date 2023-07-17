import React from "react";

const InputField = ({ label, name, placeholder, type, value, onChange, className }) => {
  return (
    <>
      <label>{label}</label>
      <br />
      {type === "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          required
          value={value}
          onChange={onChange}
          className={className}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required
          value={value}
          onChange={onChange}
          className={className}
        />
      )}
      <br />
    </>
  );
};

export default InputField;
