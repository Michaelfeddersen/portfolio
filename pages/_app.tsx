import "../styles/globals.css";
// import "@/styles/cards.css";
import "@/styles/toggle.css";
import "@/styles/popup.css";
import "@/styles/inexpand.css";
import "@/styles/scaleincenter.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
