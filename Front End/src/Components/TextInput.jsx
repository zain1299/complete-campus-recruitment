import React from "react";
import '../Styles/Components/TextInput.css'

function TextInput({
  type,
  placeHolder,
  value,
  onChange,
  name,
  id,
  className,
  disabled,
}) {
  return (
    <div>
      <input
        type={type}
        className={className ? className + "TextInput" : "TextInput"}
        placeholder={placeHolder ? placeHolder : ""}
        value={value}
        onChange={onChange}
        name={name}
        key={id}
        id={id}
        disabled={disabled}
      />
    </div>
  );
}

export default TextInput;
