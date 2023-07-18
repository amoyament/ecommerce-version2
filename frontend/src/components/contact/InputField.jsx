import React from "react";

// Pass in props label, name, etc..
const InputField = ({ label, name, placeholder, type, value, onChange, className }) => {
  return (
    <>
      <label>{label}</label>
      <br />
      {/* Props for textarea */}
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
        //Props for all other inputs
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
