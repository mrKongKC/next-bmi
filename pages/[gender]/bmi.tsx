import { useRouter } from "next/router";

export default function BMI() {
  const router = useRouter();
  const { result, gender } = router.query;
  const parsedResult =
    typeof result === "string" ? parseFloat(result).toFixed(2) : "-";
  return (
    <div className="bmi-container">
      <h3>Result: {parsedResult}</h3>
      <p className="gender-title">
        Gender: <span className="font-bold">{gender}</span>
      </p>
      <a className="bmi-result-detail" target="_blank" href="https://bpk9internationalhospital.com/care_blog/content/%E0%B8%84%E0%B8%B3%E0%B8%99%E0%B8%A7%E0%B8%93%E0%B8%94%E0%B8%B1%E0%B8%8A%E0%B8%99%E0%B8%B5%E0%B8%A1%E0%B8%A7%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B9%84%E0%B8%AB%E0%B8%A3%E0%B9%88%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%81%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%AD%E0%B9%89%E0%B8%A7%E0%B8%99#:~:text=%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%84%E0%B8%B3%E0%B8%99%E0%B8%A7%E0%B8%93%20BMI%20%E0%B9%83%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3,65%20%C3%B7%20%5B1.55%20x%201.55%5D">
        Check BMI Result Detail
      </a>
    </div>
  );
}
