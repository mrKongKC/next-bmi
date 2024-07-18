import "@/styles/globals.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container maxWidth="lg" sx={{ padding: "42px" }}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap={3}
        sx={{ height: "80dvh", border: "2px solid #1976d2" }}
      >
        <h1 className="mb-18 primary-color">Calculate BMI</h1>
        <Component {...pageProps} />
      </Box>
    </Container>
  );
}
