import { useRouter } from "next/router";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import MaleRoundedIcon from "@mui/icons-material/MaleSharp";
import FemaleRoundedIcon from "@mui/icons-material/FemaleSharp";

export default function BMI() {
  const router = useRouter();
  const { result, gender } = router.query;
  const handleClick = () => {
    window.open(
      "https://bpk9internationalhospital.com/care_blog/content/%E0%B8%84%E0%B8%B3%E0%B8%99%E0%B8%A7%E0%B8%93%E0%B8%94%E0%B8%B1%E0%B8%8A%E0%B8%99%E0%B8%B5%E0%B8%A1%E0%B8%A7%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B9%84%E0%B8%AB%E0%B8%A3%E0%B9%88%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%81%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%AD%E0%B9%89%E0%B8%A7%E0%B8%99#:~:text=%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%84%E0%B8%B3%E0%B8%99%E0%B8%A7%E0%B8%93%20BMI%20%E0%B9%83%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3,65%20%C3%B7%20%5B1.55%20x%201.55%5D"
    );
  };
  const parsedResult =
    typeof result === "string" ? parseFloat(result).toFixed(2) : "-";
  return (
    <Box sx={{ width: "50%" }}>
      <Stack spacing={3} alignItems="center">
        <Box display="flex" gap={1} alignItems="center">
          <h3>Result: {parsedResult}</h3>
          {gender === "male" ||
            (gender === "female" && (
              <Divider orientation="vertical" flexItem />
            ))}
          {gender === "male" ? (
            <MaleRoundedIcon style={{ color: "#3f51b5" }} />
          ) : gender === "female" ? (
            <FemaleRoundedIcon color="secondary" />
          ) : (
            ""
          )}
        </Box>

        <Chip
          label="Check BMI Result Detail"
          color="primary"
          onClick={handleClick}
        />
      </Stack>
    </Box>
  );
}
