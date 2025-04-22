import "@/styles/globals.css"; // Tailwind-CSS importieren

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
