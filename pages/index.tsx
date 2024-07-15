import Input from "@/components/input";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Index() {
  const router = useRouter();
  const [verifyInput, setVerifyInput] = useState<string>("main-btn");
  const [inputHeight, setInputHeightValue] = useState<number>(0);
  const [inputWeight, setInputWeightValue] = useState<number>(0);
  const [gender, setGenderValue] = useState<string>("male");

  const genderList = [
    { value: "male", text: "Male" },
    { value: "female", text: "Female" },
  ];

  const handleMaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGenderValue(e.target.value);
  };

  const handleInputHeightChange = (value: string) => {
    setInputHeightValue(parseFloat(value));
  };

  const handleInputWeightChange = (value: string) => {
    setInputWeightValue(parseFloat(value));
  };

  const changePage = () => {
    const result = inputWeight / Math.pow(inputHeight / 100, 2);
    router.push(`${gender}/bmi?result=${result}`);
  };

  const verifyNumberIsNotEmpty = (val: number) =>
    val !== null && val !== undefined && !isNaN(val) && val > 0;

  useEffect(() => {
    verifyNumberIsNotEmpty(inputHeight) && verifyNumberIsNotEmpty(inputWeight)
      ? setVerifyInput("main-btn")
      : setVerifyInput("disabled-btn");
  }, [inputHeight, inputWeight]);

  return (
    <div className="content-container">
      <select
        value={gender}
        onChange={handleMaleChange}
        className="select-container"
      >
        {genderList.map((gender) => (
          <option key={gender.value} value={gender.value}>
            {gender.text}
          </option>
        ))}
      </select>
      <Input
        title="Weight (KG)"
        placeHolder="Enter Weight"
        type="number"
        require
        onChange={handleInputWeightChange}
      ></Input>
      <Input
        title="Height (CM)"
        placeHolder="Enter height"
        type="number"
        require
        onChange={handleInputHeightChange}
      ></Input>
      <button
        className={verifyInput}
        disabled={"disabled-btn" === verifyInput}
        onClick={changePage}
      >
        Calculate
      </button>
    </div>
  );
}
