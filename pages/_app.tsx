import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
