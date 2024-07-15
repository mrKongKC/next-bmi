import React from "react";
import styles from "@/styles/Input.module.css"; // Import CSS module

interface PropsInput {
  title?: string;
  placeHolder?: string;
  type?: string;
  require?: boolean;
  onChange: (value: string) => void; //declare function that same like emit in vue to return value to parent
}

export default function Input(props: PropsInput) {
  const { title, placeHolder, onChange, type, require } = props;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue); //update to parent
  };


  return (
    //input class by className
    <div className={styles.inputContainer}>
      {!require ? (
        <label>{title}</label>
      ) : (
        <label>
          {title} <span className={styles.require}>*</span>
        </label>
      )}
      <input
        className={styles.inputField}
        type={type || "text"}
        onChange={handleInputChange} // event update to parent
        placeholder={placeHolder}
      />
    </div>
  );
}


