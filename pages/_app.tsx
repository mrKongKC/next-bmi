import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="main-layout-container">
      <div className="main-layout-container__content">
        <h1 className="mb-18">Calculate BMI</h1>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
