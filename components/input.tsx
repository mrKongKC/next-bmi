import React from "react";
import styles from "@/styles/Input.module.css"; // Import CSS module
import TextField from "@mui/material/TextField";

interface PropsInput {
  title?: string;
  placeHolder?: string;
  type?: string;
  require?: boolean;
  focused?:boolean
  onChange: (value: string) => void; //declare function that same like emit in vue to return value to parent
}

export default function Input(props: PropsInput) {
  const { title, placeHolder, onChange, type, require,focused } = props;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue); //update to parent
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (type === "number") {
      const regex = /[0-9]/;
      const key = String.fromCharCode(event.which || event.keyCode);
      if (!regex.test(key)) {
        event.preventDefault();
      }
    }
  };

  return (
    <>
      <TextField
        className={styles.inputField}
        fullWidth
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        label={
          !require ? (
            <label>{title}</label>
          ) : (
            <label>
              {title} <span className={styles.require}>*</span>
            </label>
          )
        }
        focused={focused}
        placeholder={placeHolder}
        type={type || "text"}
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
    </>
  );
}
