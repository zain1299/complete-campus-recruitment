import React from "react";

function TextArea({ value, onChange, name, id, placeholder, disabled }) {
  return (
    <textarea
      className="Textarea"
      value={value}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      id={id}
      disabled={disabled}
    />
  );
}

export default TextArea;
