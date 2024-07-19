import Input from "@/components/input";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Grid } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Stack from "@mui/material/Stack";

export default function Index() {
  const router = useRouter();
  const [verifyInput, setVerifyInput] = useState<string>("disabled-btn");
  const [inputHeight, setInputHeightValue] = useState<number>(0);
  const [inputWeight, setInputWeightValue] = useState<number>(0);
  const [gender, setGenderValue] = useState<string>("male");

  const genderList = [
    { value: "male", text: "Male" },
    { value: "female", text: "Female" },
  ];

  const handleMaleChange = (e: SelectChangeEvent) => {
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
    <Grid maxWidth="md" container justifyContent="center" p={2}>
      <Stack spacing={3} sx={{ width: "100%" }}>
        <Select value={gender} onChange={handleMaleChange}>
          {genderList.map((gender) => (
            <MenuItem key={gender.value} value={gender.value}>
              {gender.text}
            </MenuItem>
          ))}
        </Select>
        <Input
          title="Weight (KG)"
          placeHolder="Enter Weight"
          type="number"
          require
          focused
          onChange={handleInputWeightChange}
        ></Input>
        <Input
          title="Height (CM)"
          placeHolder="Enter height"
          type="number"
          require
          onChange={handleInputHeightChange}
        ></Input>

        <Button
          size="large"
          variant="contained"
          disabled={"disabled-btn" === verifyInput}
          onClick={changePage}
        >
          Calculate
        </Button>
      </Stack>
    </Grid>
  );
}
